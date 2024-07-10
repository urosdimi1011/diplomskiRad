import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { apis } from 'src/app/constats/apis';
import { TOKEN_KEY } from 'src/app/constats/const';
import { ApiService } from 'src/app/shared/services/api.service';
import { ICart, ITokenCart } from '../../interfaces/i-cart';
import swall from 'sweetalert';
@Injectable({
  providedIn: 'root'
})
export class CartService extends ApiService<ICart>{

  numberOfProduct : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  sumPriceOfCart : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  token: ITokenCart;

  constructor(http:HttpClient) { 
    super(http,apis.cart)
    if(localStorage.getItem(TOKEN_KEY)){
      this.token=jwtDecode(localStorage.getItem(TOKEN_KEY));
      this.numberOfCart();
    }
  }


  numberOfCart(){
    this.getAll(this.token.UserId).subscribe({
      next:(data)=>{
        let sum=0;
        data.forEach(x=>{
          sum += x.productPrice * x.prodcutAmount;
        })

        this.sumPriceOfCart.next(sum);
        this.numberOfProduct.next(data.length);

      },
      error:(xhr)=>{
        this.sumPriceOfCart.next(0);
        this.numberOfProduct.next(0);
      }
    })
  }
  
  prependToSend(user : any,id : number) : any{
    return {
      "product_id":id,
      "user_id":user.UserId,
      "productAmount":1
    }
  }

  addToCart(id : number):void{
    let user=localStorage.getItem(TOKEN_KEY) ? jwtDecode(localStorage.getItem(TOKEN_KEY)) : null;


    if(user!=null){
      let objToSend=this.prependToSend(user,id);
      this.create(objToSend).subscribe({
        
        next:(data)=>{
          swall("product has been successfully added to the cart").then(x=>{
  
            this.numberOfCart();
          });
        },
        error:(data)=>{
          swall("You must first login to be continue").then(x=>{
  
          });
        }
      });
    }
    else{
      swall("You must first login to be continue").then(x=>{});
    }
    setTimeout(() => {
      swall.stopLoading();
      swall.close();
    }, 1000);
  }


}
