import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: any;

  constructor() {
    this.products = [{name: '张三', productId: '1'},
      {name: '李四', productId: '2'},
      {name: '王五', productId: '3'}];
  }
  ngOnInit() {
  }
}
