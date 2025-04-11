import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './cart/product-list/product-list.component';
import { CartComponent } from './cart/cart/cart.component';

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/product-list', pathMatch: 'full' }, // Redirect default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})

export class AppRoutingModule { }
