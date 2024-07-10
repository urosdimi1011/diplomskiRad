import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ICart } from 'src/app/cart/cart/interfaces/i-cart';
import { CartService } from 'src/app/cart/cart/services/api/cart.service';
import { CartDataService } from 'src/app/cart/cart/services/data/cart-data.service';
import { IProduct } from 'src/app/interfaces/i-product';
import { ProductsService } from 'src/app/shared/services/products.service';
import jwt_decode from 'jwt-decode';
import { TOKEN_KEY } from 'src/app/constats/const';
import swall from 'sweetalert';
import { computeMsgId } from '@angular/compiler';
import { config } from 'src/app/constats/config';
import { CommentFormService } from './components/comments/services/comment-form.service';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentService } from './components/comments/services/comment.service';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit{

  id : number;
  product : IProduct;
  path = config.server + "images/";

  @ViewChild('comments') comments : CommentsComponent;

  constructor(
    private route : ActivatedRoute,
    private productService : ProductsService,
    private dataService : CartService,
    public commentFrom : CommentFormService
  ) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })
    this.commentFrom.initilizeForm();
    this.commentFrom.defualtRunValidation();
    this.getOne();
  }


  getOne() : void{
    this.productService.get(this.id).subscribe({
      next:(data)=>{
        this.product=data;
        console.log(this.product);
      },
      error:(xhr)=>{
        console.log(xhr);
      }
    })
  }

  addToCart():void{
    this.dataService.addToCart(this.id);
  }

  addComment(){
    this.commentFrom.addComment(this.id).subscribe({
      next:(data)=>{
        swall("you have successfully added a comment");
        this.comments.getAll();
      }
    });
  }

  errorMess(controlName: string, errorName: string){
    return this.commentFrom.form.get(controlName)?.hasError(errorName);
  }
}
