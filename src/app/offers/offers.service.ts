import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OffersService {

  constructor(private http: HttpClient) { }
  getOffers(): Observable<any> {
    return this.http.get(`/api/offers`);
  }
}
