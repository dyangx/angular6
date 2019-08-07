import {Component, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {CartService} from '../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products: any;
  public productID: string;
  public proId: string;

  constructor(
    private route: ActivatedRoute,
    private cartServie: CartService
  ) {
    this.products = [{name: '111'}, {name: '222'}, {name: '333'}];
  }

  ngOnInit() {
    // 订阅路由参数
    this.route.paramMap.subscribe(param => {
      this.productID = param.get('productID');
      // alert(this.productID);
    });
  }

  addToCart(pro) {
    this.cartServie.addToCart(pro);
    this.proId = pro;
  }


}

