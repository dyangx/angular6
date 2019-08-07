import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {TestComponent} from './home/test/test.component';
import {CartComponent} from './cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import {ShipComponent} from './ship/ship.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'app', component: AppComponent},
  { path: 'home', component: HomeComponent},
  { path: 'home/test', component: TestComponent},
  { path: 'product/:productID', component: ProductComponent},
  { path: 'product', component: ProductComponent},
  { path: 'cart', component: CartComponent},
  { path: 'ship', component: ShipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
