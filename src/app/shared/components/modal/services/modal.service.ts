import { Injectable, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/i-product';

@Injectable({
  providedIn: 'root'
})
export abstract class ModalService {

  abstract data : any;

  showModal : boolean =false;

  constructor() { }

}
