import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'offers-list', 
  styleUrls: [ './offers-list.component.css' ],
  templateUrl: './offers-list.component.html'
})
export class OffersListComponent implements OnInit {

  @ViewChild('appGrid') gridElem: any;

  public gridConfig: any;
  offers: any;
  constructor(
    private route: ActivatedRoute
  ) {
  }

  public ngOnInit() {
    this.offers = this.route.snapshot.data['offers'];
    debugger
    this.gridConfig = {
      data: this.offers
    }
  }

  public submitState(value: string) {

  }
}
