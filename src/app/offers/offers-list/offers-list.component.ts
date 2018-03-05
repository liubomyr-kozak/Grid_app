import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'offers-list',
  styleUrls: ['./offers-list.component.css'],
  templateUrl: './offers-list.component.html'
})
export class OffersListComponent implements OnInit {

  @ViewChild('appGrid') gridElem: any;

  public gridConfig: any;
  store: any;
  constructor(
    private route: ActivatedRoute
  ) {
  }

  public ngOnInit() {
    this.store = this.route.snapshot.data['offers'];

    this.gridConfig = {
      data: this.store.offers,
      columnsConf: [
        { type: 'text', propName: "product.content.text", width: 200},
        { type: 'contractTerm', propName: "contractTerm", width: 200 },
        { type: 'cost', propName: "cost.effectiveCost" },
      ]
    }


    console.log(this.store.offers)
  }

  public submitState(value: string) {

  }
}
