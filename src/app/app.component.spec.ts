import { AppComponent } from './app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { AppState } from './core/store/app.state';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LoadCartFromLocalStorage } from './core/store/cart/cart.actions';

describe('app::component:AppComponent', () => {
  let sut: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Partial<Store<AppState>>;

  beforeEach(() => {
    store = {
      dispatch: jasmine.createSpy('dispatch')
    };

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: Store, useValue: store }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(AppComponent);
    sut = fixture.componentInstance;
  });

  it('should load cart from local storage on init', () => {
    fixture.detectChanges();

    expect(store.dispatch).toHaveBeenCalledWith(new LoadCartFromLocalStorage());
  });
});
