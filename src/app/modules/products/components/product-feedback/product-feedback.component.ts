import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-product-feedback',
  templateUrl: './product-feedback.component.html',
  styleUrls: ['./product-feedback.component.scss']
})
export class ProductFeedbackComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  close(): void {
    this.router.navigate([{outlets: { feedback: null }}]);
  }
}
