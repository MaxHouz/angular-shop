import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public productsList: Product[];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productsList = this.productsService.getProducts();
  }
}
