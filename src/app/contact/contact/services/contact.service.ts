import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apis } from 'src/app/constats/apis';
import { ApiService } from 'src/app/shared/services/api.service';
import { IContact } from '../interfaces/i-contact';

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
