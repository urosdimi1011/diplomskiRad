import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnType } from 'src/app/shared/enums/column-type';
import { IColumn } from 'src/app/shared/interfaces/i-column';
import { BaseTableService } from 'src/app/shared/services/base-table.service';
import { CartService } from '../api/cart.service';
import { CartDataService } from '../data/cart-data.service';

@Injectable({
  providedIn: 'root'
})
export class CartTableService extends BaseTableService{
  constructor(private matDialog: MatDialog, private cartSerivice : CartService,private cartData : CartDataService) { 
    super();
  }

  override columns: IColumn[]=[

    {
      index:"select",
      label:"Select",
      type:ColumnType.Select
    },
    {
      index:"productImg",
      label:"Image"
    },
    {
      index:"productId",
      label:"R.b."
    },
    {
      index:"productName",
      label:"Name"
    },
    {
      index:"productPrice",
      label:"price"
    },
    {
      index:"prodcutAmount",
      label:"Amount"
    },
        {
      index: "delete",
      label: "Delete item",
      type: ColumnType.WithButton,
      method: (data: any) => {

       this.cartSerivice.delete(data.productId).subscribe({
        next:(data)=>{
          window.location.reload(); 
        },
        error:()=>{

        }
       });
      }
    }
  ];

  public override dialog = {
    configuration: {
      width: "80%",
      height: "auto"
    }
  }

}
