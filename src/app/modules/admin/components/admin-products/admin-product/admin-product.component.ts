import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../../products/models/product.model';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {

  @Input() product: Product;
  @Output() edit = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onEdit(): void {
    this.edit.emit(this.product);
  }

  onDelete(): void {
    this.delete.emit(this.product);
  }
}
