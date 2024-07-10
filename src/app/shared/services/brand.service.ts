import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apis } from 'src/app/constats/apis';
import { IBrand } from 'src/app/interfaces/i-brand';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService extends ApiService<IBrand> {

  constructor(
    http : HttpClient
  ) {
    super(http,apis.brands)
   }
}
