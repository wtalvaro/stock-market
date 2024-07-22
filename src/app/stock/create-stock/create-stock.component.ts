import { Component } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrl: './create-stock.component.css'
})
export class CreateStockComponent {
  public stock: Stock;
  public confirmed: boolean = false;

  constructor() {
    this.stock = new Stock('test', '', 0, 0, 'NASDAQ');
  }

  setStockPrice(price: number) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock() {
    console.log('Creating stock ', this.stock);
  }
}
