import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockItemComponent implements OnInit {
  @Input() public stock?: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  ngOnInit(): void { }

  onToggleFavorite(event: MouseEvent) {
    console.log('We are toggling the favorite state for this stock', event);
    this.toggleFavorite?.emit(this.stock);
  }

  trackStockByCode(index: number, stock: Stock) {
    return stock.code;
  }

  changeStockPrice() {
    if (this.stock) {
      this.stock.price += 5;
      console.log('Change price for stock.', this.stock, ' was triggered');
    } else {
      console.error('Stock is undefined.');
    }
  }
}
