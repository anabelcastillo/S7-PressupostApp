import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalBudgetService {

  private _priceWeb = new BehaviorSubject<number>(500);
  private _priceSEO = new BehaviorSubject<number>(300);
  private _priceGoogleAds = new BehaviorSubject<number>(200);
  private _priceTotal = new BehaviorSubject<number>(0);

  public priceWeb$ = this._priceWeb.asObservable();
  public priceSEO$ = this._priceSEO.asObservable();
  public priceGoogleAds$ = this._priceGoogleAds.asObservable();
  public priceTotal$ = this._priceTotal.asObservable();

  constructor() { }

  updatePriceWeb(price:number) {
    this._priceWeb.next(price);
    this.updateTotalPrice();
  }

  updatePriceSEO(price:number) {
    this._priceSEO.next(price);
    this.updateTotalPrice();
  }

  updatePriceGoogleAds(price:number) {
    this._priceGoogleAds.next(price);
    this.updateTotalPrice();
  }
}
