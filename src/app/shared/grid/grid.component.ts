import { Component, OnInit, Input } from '@angular/core';
import { IGridConfig } from './IGridConfig';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input('config') public config: IGridConfig
  constructor() { }

  ngOnInit() {
    
  }
  
  getData(source: {}, key: string) {
    if (key.indexOf('.') != -1) {
      return key.split('.').reduce((resource, prop) => {
        return resource[prop];
       }, source);
    }
    return source[key]
  }
}
