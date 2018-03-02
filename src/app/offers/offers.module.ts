import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { OffersListComponent } from './offers-list/offers-list.component';
import { GridModule } from '../shared/grid/grid.module';
import { OffersService } from './offers.service';
import { OffersRoutingModule } from './offers-routing.module';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    GridModule,
    OffersRoutingModule
  ],
  declarations: [OffersListComponent],
  providers: [OffersService],
})
export class OffersModule { }
