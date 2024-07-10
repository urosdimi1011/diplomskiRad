import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apis } from 'src/app/constats/apis';
import { IInfo } from 'src/app/interfaces/i-info';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class InfoService extends ApiService<IInfo> {

  constructor(
    http:HttpClient
  ) {
    super(http,apis.info)
   }
}
