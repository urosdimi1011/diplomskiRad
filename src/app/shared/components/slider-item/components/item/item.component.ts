import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { config } from 'src/app/constats/config';
import { IProduct } from 'src/app/interfaces/i-product';
import { ProductsDataForModalService } from './services/products-data-for-modal.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() typeForSorting: any;
  @Input() o:any;
  path=config.server+"images/";
  constructor(
    private modal : ProductsDataForModalService
  ) { }

  ngOnInit(): void {
  }


  openModal(){
    this.modal.setStorage(this.o);
  }
}
