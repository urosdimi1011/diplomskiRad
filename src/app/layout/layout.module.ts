import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { ScriptsComponent } from './layout/components/scripts/scripts.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from '../shared/components/nav/nav.component';
import { SearchButtonComponent } from './layout/components/header/components/search-button/search-button.component';
import { ErrorComponent } from './layout/components/error/error.component';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ScriptsComponent,
    SearchButtonComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
