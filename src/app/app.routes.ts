import { Routes } from '@angular/router';
import { ProductComponent } from './componant/product/product.component';
import { CartComponent } from './componant/cart/cart.component';
import { ProductDatailsComponent } from './componant/product-datails/product-datails.component';

export const routes: Routes = [
  {path :'product' , component :ProductComponent},
  {path : 'cart' , component : CartComponent} ,
  {path : 'productDetails/:id' , component : ProductDatailsComponent},
  {path : '**' , redirectTo : 'product' , pathMatch : 'full'}
];
