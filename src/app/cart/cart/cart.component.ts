import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CartService } from './services/api/cart.service';
import { CartDataService } from './services/data/cart-data.service';
import { CartTableService } from './services/tables/cart-table.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  idUser:number;
  constructor(
    public apiService: CartService,
    public tableService: CartTableService,
    public dataService: CartDataService
  ) { 

  }

  ngOnInit(): void {
    let user : any=jwtDecode(localStorage.getItem('token'));
    this.idUser=user.UserId;
  }

}
