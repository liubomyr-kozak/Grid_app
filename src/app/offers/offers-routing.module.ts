import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersListComponent } from './offers-list/offers-list.component';
import { OffersResolve } from './offers-resolve';

const routes: Routes = [
  {
    path: 'offers',
    component: OffersListComponent,
    resolve: {
      offers: OffersResolve
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [OffersResolve]
})
export class OffersRoutingModule { }
