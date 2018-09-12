import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductServicesPage } from './product-services';

@NgModule({
  declarations: [
    ProductServicesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductServicesPage),
  ],
})
export class ProductServicesPageModule {}
