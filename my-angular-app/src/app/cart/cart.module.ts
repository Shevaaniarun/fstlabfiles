import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HighlightDirective } from './hover-highlight.directive';

@NgModule({
  declarations: [
    CartComponent,
    ProductListComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [CartComponent, ProductListComponent]
})
export class CartModule { }
