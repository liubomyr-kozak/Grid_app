import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../DynamicComponent';

@Component({
  selector: 'contract-term',
  templateUrl: './contract-term.component.html',
  styleUrls: ['./contract-term.component.css']
})
export class ContractTermComponent extends DynamicComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
  }
}
