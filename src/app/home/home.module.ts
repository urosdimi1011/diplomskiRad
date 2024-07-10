import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { BrandSliderComponent } from './home/components/brand-slider/brand-slider.component';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [
    HomeComponent,
    BrandSliderComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }