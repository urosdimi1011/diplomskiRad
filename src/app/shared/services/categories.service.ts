import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apis } from 'src/app/constats/apis';
import { ICategories } from 'src/app/interfaces/i-categories';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends ApiService<ICategories> {

  constructor(
    http:HttpClient
  ) {
    super(http, apis.categories);
   }
  

}