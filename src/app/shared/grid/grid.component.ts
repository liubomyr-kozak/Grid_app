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
}
