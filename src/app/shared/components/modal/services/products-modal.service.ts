import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/interfaces/i-product';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsModalService extends ModalService{

  override data: IProduct;

  constructor() { 
    super();
  }
}
