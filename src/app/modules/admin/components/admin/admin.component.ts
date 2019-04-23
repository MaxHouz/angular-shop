import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateToAdminProducts(): void {
    this.router.navigate(['./products'], { relativeTo: this.route });
  }

  navigateAddProduct(): void {
    this.router.navigate(['./products/add'], { relativeTo: this.route });
  }

  navigateToOrders(): void {
    this.router.navigate(['./orders'], { relativeTo: this.route });
  }
}
