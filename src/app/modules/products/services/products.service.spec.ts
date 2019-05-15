import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppSettingsService } from '../../../core/services/app-settings.service';
import { Product } from '../models/product.model';

const mockProductsResponse = [{
  id: 1,
  name: 'name',
  price: 12,
  category: 'category',
  description: 'description',
  isAvailable: true,
  quantity: 2
}];

describe('products::service:ProductsService', () => {
  let sut: ProductsService;
  let mockHttp: HttpTestingController;
  let appSettingsService: Partial<AppSettingsService>;

  beforeEach(() => {
    appSettingsService = {
      getAppSettings: jasmine.createSpy('getAppSettings').and.returnValue({ environment: 'mock/' })
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductsService,
        { provide: AppSettingsService, useValue: appSettingsService }
      ]
    });

    mockHttp = TestBed.get(HttpTestingController);
    sut = TestBed.get(ProductsService);
  });

  afterEach(() => {
    mockHttp.verify();
  });

  it('should get products', () => {
    sut.getProducts().subscribe((products: Product[]) => {
      expect(products).toEqual(mockProductsResponse);
    });

    const mockRequest: TestRequest = mockHttp.expectOne('mock/products');

    expect(mockRequest.cancelled).toBeFalsy();
    expect(mockRequest.request.method).toEqual('GET');

    mockRequest.flush(mockProductsResponse);
  });

  it('should get product by id', () => {
    sut.getProduct(1).subscribe((product: Product) => {
      expect(product).toEqual(mockProductsResponse[0]);
    });

    const mockRequest: TestRequest = mockHttp.expectOne('mock/products/1');

    expect(mockRequest.cancelled).toBeFalsy();
    expect(mockRequest.request.method).toEqual('GET');

    mockRequest.flush(mockProductsResponse[0]);
  });

  it('should update product', () => {
    sut.updateProduct(mockProductsResponse[0]).subscribe();

    const mockRequest: TestRequest = mockHttp.expectOne('mock/products/1');

    expect(mockRequest.cancelled).toBeFalsy();
    expect(mockRequest.request.body).toEqual(mockProductsResponse[0]);
    expect(mockRequest.request.method).toEqual('PUT');

    mockRequest.flush(mockProductsResponse[0]);
  });

  it('should delete product', () => {
    sut.deleteProduct(1).subscribe();

    const mockRequest: TestRequest = mockHttp.expectOne('mock/products/1');
    expect(mockRequest.cancelled).toBeFalsy();
    expect(mockRequest.request.method).toEqual('DELETE');

    mockRequest.flush(mockProductsResponse[0]);
  });
});
