import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../products/models/product.model';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {

  productData: Product;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productData = this.route.snapshot.data['productData'];
  }
}
