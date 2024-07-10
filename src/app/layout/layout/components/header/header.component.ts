import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/authentification/services/auth.service';
import { CartService } from 'src/app/cart/cart/services/api/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  isLoggedIn$: Observable<boolean>=new Observable<boolean>();
  numberOfCartProduct$ : Observable<number>=new Observable<number>();
  sumOfCartProduct$ : Observable<number>=new Observable<number>();
  constructor(
    private auth : AuthService,
    private router : Router,
    private cartService : CartService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isLoggedIn;
    this.numberOfCartProduct$=this.cartService.numberOfProduct;
    this.sumOfCartProduct$=this.cartService.sumPriceOfCart;
  }


  logout() : void{
    this.auth.logout();
    this.cartService.numberOfCart();
  }

}
