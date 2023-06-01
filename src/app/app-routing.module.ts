import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'products', component: ProductsComponent },
  {path: 'shoping-cart', component: ShopingCartComponent },
  {path: 'check-out', component: CheckOutComponent },
  {path: 'order-success', component: OrderSuccessComponent },
  {path: 'login', component:LoginComponent },
  {path: 'admin/products', component: AdminProductsComponent },
  {path: 'admin/orders', component: AdminOrdersComponent },
  {path: 'my-orders', component: MyOrdersComponent },
  {path: 'admin/product-form/new', component: ProductFormComponent },
  {path: 'admin/product-form/:id', component: ProductFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
