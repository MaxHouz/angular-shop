import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/app.state';
import * as RouterActions from '../../../../core/store/router/router.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  navigateToAdminProducts(): void {
    this.store.dispatch(new RouterActions.Go({
      path: ['./products'],
      extras: { relativeTo: this.route }
    }));
  }

  navigateAddProduct(): void {
    this.store.dispatch(new RouterActions.Go({
      path: ['./products/add'],
      extras: { relativeTo: this.route }
    }));
  }

  navigateToOrders(): void {
    this.store.dispatch(new RouterActions.Go({
      path: ['./orders'],
      extras: { relativeTo: this.route }
    }));
  }
}
