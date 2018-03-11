import { Component, OnInit, Input } from '@angular/core';
import { DynamicComponent } from '../DynamicComponent';

@Component({
  selector: 'text',
  template: '{{data}}',
})
export class TextComponent extends DynamicComponent implements OnInit {
  constructor() { 
    super();
    
  }

  ngOnInit() {
  }
}
