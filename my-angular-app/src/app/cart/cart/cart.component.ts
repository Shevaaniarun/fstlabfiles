import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  get items() {
    return this.cartService.getItems();
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
  }

  get totalPrice() {
    return this.cartService.getTotal();
  }
}
