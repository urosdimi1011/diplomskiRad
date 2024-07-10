import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { config } from 'src/app/constats/config';
import { SpinnerFunctions } from '../../classes/spinner-functions';
import { ColumnType } from '../../enums/column-type';
import { IColumn } from '../../interfaces/i-column';
import { ApiService } from '../../services/api.service';
import { BaseDataService } from '../../services/base-data.service';
import { BaseTableService } from '../../services/base-table.service';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css']
})
export class CommonTableComponent implements OnInit {

  @Input() apiService : ApiService<any>;
  @Input() tableService : BaseTableService;
  @Input() dataService : BaseDataService;
  @Input() idUser : number;

  path=config.server + "images/";

  @ViewChild(MatDialog) paginator : MatPaginator;



  displayedColumns: any = [];
  allColumns: any = [];
  columnTypeEnum: typeof ColumnType = ColumnType;
  
  constructor(
    private matDialog : MatDialog
  ) { }


  dataSource = new MatTableDataSource<any>([]);
  selection = new SelectionModel<any>(true, []);

  ngAfterViewInit(): void {
    if(this.tableService.hasPaginator)
      this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.allColumns=this.tableService.getColumns();
    this.displayedColumns=this.allColumns.map((x : any) => x.index);
    this.trackStorageChange();
    this.getAll();
  }

  private subscription: Subscription = new Subscription();


  getAll(): void {
    SpinnerFunctions.showSpinner();
    if(this.idUser != null){
      this.apiService.getAll(this.idUser).subscribe({
        next: (data: any[]) => {
          console.log(data);
          this.dataService.setStorage(data);
          SpinnerFunctions.hideSpinner();
        },
        error: (data: any) => {
          console.log(data);
          SpinnerFunctions.hideSpinner();
        }
      });
    }
    else{
      this.apiService.getAll().subscribe({
        next: (data: any[]) => {
          console.log(data);
          this.dataService.setStorage(data);
          SpinnerFunctions.hideSpinner();
        },
        error: (data: any) => {
          console.log(data);
          SpinnerFunctions.hideSpinner();
        }
      });
    }
  }

  trackStorageChange(): void {
    this.subscription.add(this.dataService.getStorage().subscribe({
      next: (data: any) => {
        console.log(data);
        this.dataSource.data = data;
      }
    }));
  }
  
  clickOnFieldWithButton(element: any, column: IColumn) {
    column.method(element);
  }

}
