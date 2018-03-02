import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'offers', 
  styleUrls: [ './offers.component.css' ],
  templateUrl: './offers.component.html'
})
export class OffersComponent implements OnInit {
  public localState = { value: '' };
  constructor(
    public appState: AppState,
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
  }

  public submitState(value: string) {

  }
}
