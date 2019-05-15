import { CartService } from './cart.service';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { Product } from '../../products/models/product.model';

describe('cart::service:CartService', () => {
  let sut: CartService;
  let mockCart: Product[];
  let localStorageService: Partial<LocalStorageService>;

  beforeEach(() => {
    mockCart = [{
      id: 1,
      name: 'name',
      price: 12,
      category: 'category',
      description: 'description',
      isAvailable: true,
      quantity: 2
    }];

    localStorageService = {
      getItem: jasmine.createSpy('getItem').and.returnValue(JSON.stringify(mockCart)),
      setItem: jasmine.createSpy('setItem'),
      removeItem: jasmine.createSpy('removeItem')
    };

    sut = new CartService(
      localStorageService as LocalStorageService
    );
  });

  it('should get products from localStorage', () => {
    expect(sut.getCart()).toEqual(mockCart);
  });

  it('should update cart in localStorage', () => {
    sut.updateCart(mockCart);

    expect(localStorageService.setItem).toHaveBeenCalledWith(
      'cart',
      JSON.stringify(mockCart)
    );
  });

  it('should clean cart in localStorage', () => {
    sut.cleanLocalCart();

    expect(localStorageService.removeItem).toHaveBeenCalledWith('cart');
  });
});
