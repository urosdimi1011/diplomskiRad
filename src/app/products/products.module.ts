import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AllProductsComponent } from './all-products/all-products.component';
import { SharedModule } from '../shared/shared.module';
import { SearchButtonUnComponent } from '../shared/components/search-button-un/search-button-un.component';
import { ProductItemComponent } from './all-products/components/product-item/product-item.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CommentsComponent } from './single-product/components/comments/comments.component';
import { CommentComponent } from './single-product/components/comments/comment/comment.component';

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductItemComponent,
    SingleProductComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
