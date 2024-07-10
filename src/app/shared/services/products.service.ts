import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apis } from 'src/app/constats/apis';
import { IProduct } from 'src/app/interfaces/i-product';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ApiService<IProduct>{

  constructor(
    http:HttpClient
  ) {
    super(http, apis.products);
   }
}
