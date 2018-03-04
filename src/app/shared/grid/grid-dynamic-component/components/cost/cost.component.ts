import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../DynamicComponent';

@Component({
  selector: 'cost',
  templateUrl: './cost.component.html'
})
export class CostComponent extends DynamicComponent implements OnInit{

  constructor() {
    super();
   }

  ngOnInit() {
  }
}
