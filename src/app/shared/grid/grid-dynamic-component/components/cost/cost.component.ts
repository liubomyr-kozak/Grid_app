import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../DynamicComponent';

@Component({
  selector: 'cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.css']
})
export class CostComponent extends DynamicComponent implements OnInit{

  constructor() {
    super();
   }

  ngOnInit() {
  }
}
