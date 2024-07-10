import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { apis } from 'src/app/constats/apis';
import { TOKEN_KEY } from 'src/app/constats/const';
import { ApiService } from 'src/app/shared/services/api.service';
import { IComment } from '../interfaces/i-comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService extends ApiService<IComment>{

  constructor(http:HttpClient) {
    super(http,apis.comment)
   }

}
