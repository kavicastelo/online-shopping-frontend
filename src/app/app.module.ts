import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AboutComponent } from './components/about/about.component';
import { FAQComponent } from './components/faq/faq.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { ContactComponent } from './components/contact/contact.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ProductDefaultComponent } from './components/PRODUCT_DETAILS/product-default/product-default.component';
import { ProductLeftComponent } from './components/PRODUCT_DETAILS/product-left/product-left.component';
import { ProductRightComponent } from './components/PRODUCT_DETAILS/product-right/product-right.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import { ShopListViewComponent } from './components/SHOP_PAGES/shop-list-view/shop-list-view.component';
import { ShopGridViewComponent } from './components/SHOP_PAGES/shop-grid-view/shop-grid-view.component';
import { ShopLeftSidebarComponent } from './components/SHOP_PAGES/shop-left-sidebar/shop-left-sidebar.component';
import { ShopRightSidebarComponent } from './components/SHOP_PAGES/shop-right-sidebar/shop-right-sidebar.component';
import { ShopComponent } from './components/SHOP_PAGES/shop/shop.component';
import {MatSelectModule} from "@angular/material/select";
import { ShopListComponent } from './components/SHOP_PAGES/shop-list/shop-list.component';
import { Column3Component } from './components/SHOP_PAGES/column3/column3.component';
import { Column4Component } from './components/SHOP_PAGES/column4/column4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    FAQComponent,
    ContactComponent,
    ProductDefaultComponent,
    ProductLeftComponent,
    ProductRightComponent,
    ShopListViewComponent,
    ShopGridViewComponent,
    ShopLeftSidebarComponent,
    ShopRightSidebarComponent,
    ShopComponent,
    ShopListComponent,
    Column3Component,
    Column4Component
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule,
        MatExpansionModule,
        MatMenuModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatSliderModule,
        MatProgressBarModule,
        MatCardModule,
        MatRadioModule,
        MatSelectModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
