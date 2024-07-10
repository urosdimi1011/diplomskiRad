import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './layout/layout/components/error/error.component';
import { SpinnerFunctions } from './shared/classes/spinner-functions';
import { AuthGuard } from './shared/guard/auth.guard';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';
const routes:Routes=
[
  {
    path:"",
    component:LayoutComponent,
    children:[
      {
        path:"",
        redirectTo:"/home",
        pathMatch:"full"
      },
      {
        path:"home",
        loadChildren:()=>import("./home/home.module").then(m=>m.HomeModule),
        data: { title: "Home" }
      },
      {
        path:"products",
        loadChildren:()=>import("./products/products.module").then(m=>m.ProductsModule),
        data: { title: "products" }
      },
      {
        path:"contact",
        loadChildren:()=>import("./contact/contact.module").then(m=>m.ContactModule),
        data: { title: "contact" }
      },
      {
        path:"author",
        loadChildren:()=>import("./author/author.module").then(m=>m.AuthorModule),
        data: { title: "contact" }
      },
      {
        path:"cart",
        loadChildren:()=>import("./cart/cart.module").then(m=>m.CartModule),
        data: { title: "Cart" },
        canActivate:[AuthGuard]
      },
      {
        path:"authentification",
        loadChildren:()=>import("./authentification/authentification.module").then(m=>m.AuthentificationModule),
        data: { title: "products" }
      },
      {
        path:"**",
        component:ErrorComponent,
        data: { title: "error" }
      }
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [
      {
        provide : HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi   : true,
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
