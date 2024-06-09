import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// tab bar module component add all pages

import { TabBarComponent } from './Screnn/tab-bar/tab-bar.component';

//TabBarComponent has been added to declerstion
import { ProductCardComponent } from './Screnn/product-card/product-card.component';

@NgModule({
  declarations: [AppComponent,TabBarComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
