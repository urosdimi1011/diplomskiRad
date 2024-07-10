import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apis } from 'src/app/constats/apis';
import { ApiService } from 'src/app/shared/services/api.service';
import { IBanner } from '../interfaces/i-banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService extends ApiService<IBanner> {

  constructor(
    http : HttpClient
  ) { 
    super(http,apis.banner);
  }

  // bannerForSort(type:string,numberUsing:number) : any{
  //   this.getAll().subscribe({
  //     next:(data : any)=>{
  //         return data.filter((x : any)=>{
  //         if(x.type == type)
  //           return true;
  //         return false;
  //       }).slice(0,numberUsing);
  //     }
  //   })
  // }

}
