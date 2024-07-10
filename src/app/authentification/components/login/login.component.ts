import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IToken } from './interfaces/i-token';
import { tap } from 'rxjs';
import { CartService } from 'src/app/cart/cart/services/api/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginValid = true;
  public username = '';
  public password = '';
  public errorMessage :string;



  constructor(
    private authService : AuthService,
    private cartService : CartService,
    private router : Router
  ) {

  }

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {

  }

  public onSubmit(): void {
    this.authService.login(this.username,this.password).subscribe({
      next:(data : any)=>{
        
      this.loginValid=true;

      this.authService.isLoggedIn.next(true);

      let token = data as IToken;

      this.authService.storeToken(token.token);

      this.cartService.numberOfCart();
      
      this.router.navigate(['/home']);

      },
      error:(error)=>{
        this.loginValid=false;
        console.log(error);
      }
    })
  }
}
