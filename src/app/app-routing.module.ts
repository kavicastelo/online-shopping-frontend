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
import {ShopListViewComponent} from "./components/SHOP_PAGES/shop-list-view/shop-list-view.component";
import {ShopGridViewComponent} from "./components/SHOP_PAGES/shop-grid-view/shop-grid-view.component";
import {ShopComponent} from "./components/SHOP_PAGES/shop/shop.component";
import {ShopLeftSidebarComponent} from "./components/SHOP_PAGES/shop-left-sidebar/shop-left-sidebar.component";
import {ShopRightSidebarComponent} from "./components/SHOP_PAGES/shop-right-sidebar/shop-right-sidebar.component";
import {ShopListComponent} from "./components/SHOP_PAGES/shop-list/shop-list.component";
import {Column3Component} from "./components/SHOP_PAGES/column3/column3.component";
import {Column4Component} from "./components/SHOP_PAGES/column4/column4.component";
import {CartComponent} from "./components/EXTRA/cart/cart.component";
import {CheckoutComponent} from "./components/EXTRA/checkout/checkout.component";
import {CompareComponent} from "./components/EXTRA/compare/compare.component";
import {MyAccountComponent} from "./components/EXTRA/my-account/my-account.component";
import {
  BlogStanderedFullComponent
} from "./components/BLOG/BLOG_LAYOUT/blog-standered-full/blog-standered-full.component";
import {
  BlogStanderedLeftSideComponent
} from "./components/BLOG/BLOG_LAYOUT/blog-standered-left-side/blog-standered-left-side.component";
import {
  BlogStanderedRightSideComponent
} from "./components/BLOG/BLOG_LAYOUT/blog-standered-right-side/blog-standered-right-side.component";
import {BlogGridLeftComponent} from "./components/BLOG/BLOG_LAYOUT/blog-grid-left/blog-grid-left.component";
import {BlogGridRightComponent} from "./components/BLOG/BLOG_LAYOUT/blog-grid-right/blog-grid-right.component";
import {BlogMasonry3ColComponent} from "./components/BLOG/BLOG MASONARY/blog-masonry3-col/blog-masonry3-col.component";
import {BlogMasonry4ColComponent} from "./components/BLOG/BLOG MASONARY/blog-masonry4-col/blog-masonry4-col.component";
import {BlogListComponent} from "./components/BLOG/blog-list/blog-list.component";
import {
  BlogSingleDefaultComponent
} from "./components/BLOG/BLOG_SINGLE/blog-single-default/blog-single-default.component";

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"faq",component:FAQComponent},
  {path:"contact",component:ContactComponent},
  {path:"product-default",component:ProductDefaultComponent},
  {path:"product-left-side",component:ProductLeftComponent},
  {path:"product-right-side",component:ProductRightComponent},
  {path:"shop",component:ShopComponent,children:[
      {path:"", redirectTo:"/shop/shop-list-view/shop-list",pathMatch:"full"},
      {path:"shop-list-view",component:ShopListViewComponent, children:[
          {path:"", redirectTo:"/shop/shop-list-view/shop-list",pathMatch:"full"},
          {path:"shop-list",component:ShopListComponent},
          {path:"shop-grid",component:ShopGridViewComponent},
        ]},
      {path:"shop-left-side",component:ShopLeftSidebarComponent},
      {path:"shop-right-side",component:ShopRightSidebarComponent},
      {path:"shop-col-3",component:Column3Component},
      {path:"shop-col-4",component:Column4Component},
    ]},
  {path:"blog-full-width",component:BlogStanderedFullComponent},
  {path:"blog-left",component:BlogStanderedLeftSideComponent},
  {path:"blog-right",component:BlogStanderedRightSideComponent},
  {path:"blog-grid-left",component:BlogGridLeftComponent},
  {path:"blog-grid-right",component:BlogGridRightComponent},
  {path:"blog-masonry-3",component:BlogMasonry3ColComponent},
  {path:"blog-masonry-4",component:BlogMasonry4ColComponent},
  {path:"blog-list",component:BlogListComponent},
  {path:"blog-single",component:BlogSingleDefaultComponent},
  {path:"cart",component:CartComponent},
  {path:"check-out",component:CheckoutComponent},
  {path:"compare",component:CompareComponent},
  {path:"account",component:MyAccountComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
