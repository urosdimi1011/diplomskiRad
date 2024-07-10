import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { config } from 'src/app/constats/config';
import { IProduct } from 'src/app/interfaces/i-product';
import { ProductsDataForModalService } from 'src/app/shared/components/slider-item/components/item/services/products-data-for-modal.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit,OnChanges {

  @Input('product') p : IProduct; 

  path = config.server + "images/";
  
  @Input() changeDisplay : string=""; 

  constructor(
    private modal : ProductsDataForModalService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    console.log(this.p);
  }
  
  openModal(){
    this.modal.setStorage(this.p);
  }


}
