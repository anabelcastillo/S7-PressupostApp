import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public priceWeb:number = 500;
  public priceSEO:number = 300;
  public priceGoogleAds:number = 200;
  public priceTotal:number = 0;

  public checkboxWeb:boolean = false;
  public checkboxSEO:boolean = false;
  public checkboxGoogleAds:boolean = false;

  currentTotalPrice():void {
    this.priceTotal = (this.checkboxWeb ? this.priceWeb : 0) +
                      (this.checkboxSEO ? this.priceSEO : 0) +
                      (this.checkboxGoogleAds ? this.priceGoogleAds : 0)
  }

}
