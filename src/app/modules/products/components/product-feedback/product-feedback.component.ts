import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/app.state';
import * as RouterActions from '../../../../core/store/router/router.actions';

@Component({
  selector: 'app-product-feedback',
  templateUrl: './product-feedback.component.html',
  styleUrls: ['./product-feedback.component.scss']
})
export class ProductFeedbackComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  close(): void {
    this.store.dispatch(new RouterActions.Go({
      path: [{outlets: { feedback: null }}]
    }));
  }
}
