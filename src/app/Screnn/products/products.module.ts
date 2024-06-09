import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { ProductCardComponent } from '../product-card/product-card.component';  // Adjust path as needed

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    ProductCardComponent
    

  ],
  declarations: [ProductsPage,
    ProductCardComponent // Add the component here
  ],

})
export class ProductsPageModule {}

