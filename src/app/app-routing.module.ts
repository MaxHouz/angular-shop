import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { AdminLoadGuard } from './modules/admin/guards/admin-load.guard';

const routes: Routes = [
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule',
    canLoad: [AdminLoadGuard],
  },
  {
    path: '',
    redirectTo: '/products-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
