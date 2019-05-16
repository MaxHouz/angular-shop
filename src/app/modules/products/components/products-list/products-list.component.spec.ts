import { ProductsListComponent } from './products-list.component';
import { ProductsService } from '../../services/products.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/app.state';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from '../product/product.component';
import { MaterialModule } from '../../../../core/material/material.module';
import { of } from 'rxjs';
import { Product } from '../../models/product.model';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AddProductToCart } from '../../../../core/store/cart/cart.actions';
import * as RouterActions from '../../../../core/store/router/router.actions';

describe('products::component:ProductsListComponent', () => {
  let sut: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let store: Partial<Store<AppState>>;
  let productsService: Partial<ProductsService>;
  let productsList: Product[];
  let productEl: DebugElement;

  beforeEach(() => {
    store = {
      dispatch: jasmine.createSpy('dispatch')
    };

    productsList = [
      {
        id: 1,
        name: 'name',
        price: 12,
        category: 'category',
        description: 'description',
        isAvailable: true,
        quantity: 2
      }
    ];

    productsService = {
      getProducts: jasmine.createSpy('getProducts').and.returnValue(of(productsList))
    };

    TestBed.configureTestingModule({
      declarations: [
        ProductComponent,
        ProductsListComponent
      ],
      providers: [
        { provide: Store, useValue: store },
        { provide: ProductsService, useValue: productsService }
      ],
      imports: [MaterialModule]
    });

    fixture = TestBed.createComponent(ProductsListComponent);
    sut = fixture.componentInstance;

    fixture.detectChanges();
    productEl = fixture.debugElement.query(By.css('app-product'));
  });

  it('should load product list on init', (done) => {
    fixture.detectChanges();

    sut.productsList.subscribe((products: Product[]) => {
      expect(products).toEqual(productsList);
      done();
    });
  });

  describe('actions', () => {
    describe('buy', () => {
      beforeEach(() => {
        productEl.triggerEventHandler('buy', sut.productsList[0]);
      });
      it('should add product to cart', () => {
        expect(store.dispatch).toHaveBeenCalledWith(new AddProductToCart(sut.productsList[0]));
      });

      it('should navigate to order page', () => {
        expect(store.dispatch).toHaveBeenCalledWith(new RouterActions.Go({
          path: ['/order']
        }));
      });
    });

    it('should dispatch add to cart action on add to cart event', () => {
      productEl.triggerEventHandler('addToCard', sut.productsList[0]);

      expect(store.dispatch).toHaveBeenCalledWith(new AddProductToCart(sut.productsList[0]));
    });
  });
});
