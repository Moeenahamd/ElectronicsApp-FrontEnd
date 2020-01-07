import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { ContactComponent } from './contact/contact.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TrackOrderComponent } from './track-order/track-order.component';



const routes: Routes = [
  {path:'shoping_cart',component:ShopingCartComponent},
  {path:'contact',component:ContactComponent},
  {path:'wish_list',component:WishListComponent},
  {path:'about',component:AboutComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'track',component:TrackOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[ShopingCartComponent,ContactComponent,WishListComponent,AboutComponent,RegisterComponent,TrackOrderComponent]
