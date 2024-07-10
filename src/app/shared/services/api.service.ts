import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {config} from "src/app/constats/config";
@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor(
    protected http: HttpClient,
    @Inject("apiPath")  protected apiPath : string
  ) { }
  private apiSuf=this.apiPath.endsWith(".json") ? config.local : config.server
  // private apiSuf=config.server;


  getAll(id? :number) : Observable<T>{
    let queryString="";
    if(id!=null){
      queryString=`?user_id=${id}`;
    }
    return this.http.get<T>(this.apiSuf+this.apiPath + queryString);
  }

  get(id:number | string) : Observable<T>{
    return this.http.get<T>(this.apiSuf + this.apiPath + '/' + id);
  }

  create(dataToSend: any,headers?: HttpHeaders): Observable<any> {
    return this.http.post(this.apiSuf + this.apiPath, dataToSend,{headers:headers});
  }
  // create(dataToSend : T) : Observable<T>{
  //   //GET ZA PROBU
  //   return this.http.get<T>(this.apiSuf + this.apiPath,dataToSend);
  // }

  update(id:number | string,dataToSend : T) : Observable<T>{
    return this.http.patch<T>(this.apiSuf + this.apiPath + '/' + id,dataToSend);
  }

  delete(id : number | string) : Observable<T>{
    return  this.http.delete<T>(this.apiSuf + this.apiPath + "/" + id);
  }
  deleteGroup(id : number | string,ids : any[]) : Observable<T>{
    return  this.http.delete<T>(this.apiSuf + this.apiPath + "/" + id);
  }
}
