import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AboutComponent} from "./components/about/about.component";
import {FAQComponent} from "./components/faq/faq.component";
import {ContactComponent} from "./components/contact/contact.component";
import {ProductDefaultComponent} from "./components/PRODUCT_DETAILS/product-default/product-default.component";
import {ProductLeftComponent} from "./components/PRODUCT_DETAILS/product-left/product-left.component";
import {ProductRightComponent} from "./components/PRODUCT_DETAILS/product-right/product-right.component";

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"faq",component:FAQComponent},
  {path:"contact",component:ContactComponent},
  {path:"product-default",component:ProductDefaultComponent},
  {path:"product-left-side",component:ProductLeftComponent},
  {path:"product-right-side",component:ProductRightComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
