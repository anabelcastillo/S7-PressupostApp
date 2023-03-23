import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.scss']
})
export class PanellComponent {

  @Output() updatePrice = new EventEmitter<number>();

  public numPages:number = 0;
  public numLanguages:number = 0;

  currentTotalPrice():void {
    this.updatePrice.emit((this.numPages * 30) + (this.numLanguages * 30));
  }
  
}
