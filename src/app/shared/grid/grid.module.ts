import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { GridDynamicComponentModule } from './grid-dynamic-component/grid-dynamic-component.module';

@NgModule({
  imports: [
    CommonModule,
    GridDynamicComponentModule
  ],
  declarations: [GridComponent],
  exports: [GridComponent]
})
export class GridModule { }
