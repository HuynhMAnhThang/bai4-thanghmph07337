import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCompComponent } from './homeComp/homeComp.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductServicesService } from './services/product-services.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ManagerProductComponent } from './manager-product/manager-product.component';
import { BannerHomeComponent } from './banner-home/banner-home.component';
import { FooterWebComponent } from './footer-web/footer-web.component';
import { BannerProductComponent } from './banner-product/banner-product.component';
import { Loi404Component } from './loi404/loi404.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { ShopNowComponent } from './shop-now/shop-now.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeCompComponent,
      ProductListComponent,
      ProductDetailComponent,
      ManagerProductComponent,
      BannerHomeComponent,
      FooterWebComponent,
      BannerProductComponent,
      Loi404Component,
      HeaderNavComponent,
      ShopNowComponent,

   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      
   ],
   providers: [ProductServicesService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
