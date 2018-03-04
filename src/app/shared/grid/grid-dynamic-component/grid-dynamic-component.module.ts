import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostComponent } from './components/cost/cost.component';
import { GridDynamicComponentComponent } from './grid-dynamic-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CostComponent, GridDynamicComponentComponent],
  exports: [GridDynamicComponentComponent],
  entryComponents: [CostComponent]
})
export class GridDynamicComponentModule { }
