import { ProductComponent } from './product.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/app.state';
import { MaterialModule } from '../../../../core/material/material.module';
import { By } from '@angular/platform-browser';
import * as RouterActions from '../../../../core/store/router/router.actions';
import { Product } from '../../models/product.model';

describe('products::component:ProductComponent', () => {
  let sut: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let store: Partial<Store<AppState>>;

  beforeEach(() => {
      store = {
        dispatch: jasmine.createSpy('dispatch')
      };

      TestBed.configureTestingModule({
        declarations: [ProductComponent],
        providers: [
          { provide: Store, useValue: store }
        ],
        imports: [MaterialModule]
      });

      fixture = TestBed.createComponent(ProductComponent);
      sut = fixture.componentInstance;

      sut.product = {
        id: 1,
        name: 'name',
        price: 12,
        category: 'category',
        description: 'description',
        isAvailable: true,
        quantity: 2
      };
  });

  it('should set product name', () => {
    const productName = fixture.debugElement.query(By.css('.product-title'));
    fixture.detectChanges();

    expect(productName.nativeElement.textContent).toEqual(' name ');
  });

  it('should set product category in uppercase', () => {
    const category = fixture.debugElement.query(By.css('mat-card-subtitle'));
    fixture.detectChanges();

    expect(category.nativeElement.textContent).toEqual(' CATEGORY ');
  });

  it('should set product description', () => {
    const description = fixture.debugElement.query(By.css('.info'));
    fixture.detectChanges();

    expect(description.nativeElement.textContent).toContain('description');
  });

  it('should set product price', () => {
    const price = fixture.debugElement.query(By.css('.price'));
    fixture.detectChanges();

    expect(price.nativeElement.textContent).toEqual(' Price: $12.00 ');
  });


  describe('product is unavailable', () => {
    let available;

    beforeEach(() => {
      sut.product.isAvailable = false;
      fixture.detectChanges();
      available = fixture.debugElement.query(By.css('.status'));
    });

    it('should contain correct text for available product', () => {
      expect(available.nativeElement.textContent).toEqual('Not Available');
    });

    it('should set correct class for available product', () => {
      expect(available.nativeElement.classList).toContain('status_unavailable');
    });

    it('should disable buy button', () => {
      const button = fixture.debugElement.query(By.css('.order-button_buy'));
      expect(button.nativeElement.disabled).toBeTruthy();
    });

    it('should disable add to cart button', () => {
      const button = fixture.debugElement.query(By.css('.order-button_add'));
      expect(button.nativeElement.disabled).toBeTruthy();
    });
  });

  describe('product is available', () => {
    let available;

    beforeEach(() => {
      sut.product.isAvailable = true;
      fixture.detectChanges();
      available = fixture.debugElement.query(By.css('.status'));
    });

    it('should contain correct text for available product', () => {
      expect(available.nativeElement.textContent).toEqual('Available');
    });

    it('should set correct class for available product', () => {
      expect(available.nativeElement.classList).toContain('status_available');
    });

    it('should enable buy button', () => {
      const button = fixture.debugElement.query(By.css('.order-button_buy'));
      expect(button.nativeElement.disabled).toBeFalsy();
    });

    it('should enable add to cart button', () => {
      const button = fixture.debugElement.query(By.css('.order-button_add'));
      expect(button.nativeElement.disabled).toBeFalsy();
    });
  });

  describe('actions', () => {
    it('should navigate to products page on product name click', () => {
      const productName = fixture.debugElement.query(By.css('.product-title'));
      productName.triggerEventHandler('click', null);

      expect(store.dispatch).toHaveBeenCalledWith(new RouterActions.Go({
        path: ['/product', 1]
      }));
    });

    it('should emit on buy event on click', () => {
      let selectedProduct: Product;
      const button = fixture.debugElement.query(By.css('.order-button_buy'));

      fixture.detectChanges();

      sut.buy.subscribe((product: Product) => selectedProduct = product);
      button.triggerEventHandler('click', null);
      expect(selectedProduct).toEqual(sut.product);
    });

    it('should emit on add to cart event on click', () => {
      let selectedProduct: Product;
      const button = fixture.debugElement.query(By.css('.order-button_add'));

      fixture.detectChanges();

      sut.addToCard.subscribe((product: Product) => selectedProduct = product);
      button.triggerEventHandler('click', null);
      expect(selectedProduct).toEqual(sut.product);
    });
  });
});
