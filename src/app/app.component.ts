import { Component, OnInit } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'stock-market';
  public stock?: Stock;

  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ');
  }

  onToggleFavorite(stock: Stock) {
    if (this.stock) {
      this.stock.favorite = !this.stock.favorite;
      console.log('Favorite for stock.', stock, ' was triggered');
    } else {
      console.error('Stock is undefined. Cannot toggle favorite.');
    }
  }

  changeStockObject() {
    this.stock = new Stock('Test Stock Company - ', 'TSC', 85, 80, 'NASDAQ');
  }

  changeStockPrice() {
    if (this.stock) {
      this.stock.price += 10;
      console.log('Change price for stock.', this.stock, ' was triggered');
    } else {
      console.error('Stock is undefined.');
    }
  }

  testMethod() {
    console.log('Test method in AppComponent triggered');
  }
}
