import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { OffersService } from './offers.service';

@Injectable()
export class OffersResolve implements Resolve<any>{
    constructor(private offersService: OffersService) {
    }
    resolve(route: ActivatedRouteSnapshot): Observable<any>  {
      return this.offersService.getOffers();
    }
}