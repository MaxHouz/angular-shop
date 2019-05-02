import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Order } from '../../../../order/models/order.models';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent implements OnInit {

  @Input() order: Order;
  @Output() delete = new EventEmitter<Order>();

  constructor() { }

  ngOnInit() {
  }

  onDelete(): void {
    this.delete.emit(this.order);
  }
}
