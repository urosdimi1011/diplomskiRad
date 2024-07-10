import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TransitionCheckState } from '@angular/material/checkbox';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/cart/cart/services/api/cart.service';
import { config } from 'src/app/constats/config';
import { IProduct } from 'src/app/interfaces/i-product';
import { IModalConfig } from './interfaces/i-modal-config';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit {

  modalConfig:IModalConfig;

  path = config.server + "images/";

  private modalRef : NgbModalRef;

  @ViewChild('modal') modalContent : TemplateRef<ModalComponent>
  @Input('product') product : ModalService;
  
  constructor(
    private modalService : NgbModal,
    private cartData : CartService
  ) { }


  ngAfterViewInit(): void {
  
   
    
  }

  ngOnInit(): void {
    console.log(this.product);
  }

  open() {
    this.modalRef = this.modalService.open(this.modalContent)
    this.modalRef.result.then()
  }

  close() {
    this.modalRef.close()
  }

  dismiss() {
    this.modalRef.dismiss()
  }
  
  addToCart(){
    this.cartData.addToCart(this.product.data.id);
  }
}
