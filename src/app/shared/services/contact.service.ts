import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IContact } from 'src/app/contact/contact/interfaces/i-contact';
import { HttpClient } from '@angular/common/http';
import { apis } from 'src/app/constats/apis';
@Injectable({
  providedIn: 'root'
})
export class ContactService extends ApiService<IContact>{

  constructor(
    http:HttpClient
  ) { 
    super(http,apis.contact)
  }
}
