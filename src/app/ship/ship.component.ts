import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart/cart.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {

  public shippingCosts;

  constructor(
    private cartService: CartService
  ) {
    this.shippingCosts = cartService.getShippingPrices();
  }

  ngOnInit() {
  }

}
