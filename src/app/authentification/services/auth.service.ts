import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, from, map, Observable } from 'rxjs';
import { apis } from 'src/app/constats/apis';
import { TOKEN_KEY } from 'src/app/constats/const';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService<any> {

  isLoggedIn =new BehaviorSubject<boolean>(this.isAuthorized());

  constructor(http : HttpClient,private router : Router) {
    super(http,apis.auth)
   }

   public login(username: string, password: string): Observable<void> {
    let data : any={
      "Username":username,
      "password":password
    }

    return this.create(data);
  }

  public logout(){
    localStorage.removeItem(TOKEN_KEY);
    this.isLoggedIn.next(false);

    this.router.navigate(['/home']);

  }

  storeToken(token : string) : void {
    localStorage.setItem(TOKEN_KEY,String(token));
  }

  getToken() : string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public isAuthorized() : boolean{
      return this.getToken() !==null;
  }

}
