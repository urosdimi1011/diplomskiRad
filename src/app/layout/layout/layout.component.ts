import { Component, OnInit, ViewChild } from '@angular/core';
import { IProduct } from 'src/app/interfaces/i-product';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ProductsModalService } from 'src/app/shared/components/modal/services/products-modal.service';
import { ProductsDataForModalService } from 'src/app/shared/components/slider-item/components/item/services/products-data-for-modal.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @ViewChild('myModal') modal : ModalComponent;
  
  constructor(
    public modalService : ProductsModalService,
    private modalBehi : ProductsDataForModalService,
    public product : ProductsModalService
  ) { }

  ngOnInit(): void {
    this.modalBehi.getStorage().subscribe({
      next:(data)=>{

        this.product.data=data;
        
        this.modal.open();
      }
    })
  }

}
