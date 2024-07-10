import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit,OnChanges{

  @Input() totalProducts:number;
  totalPages:number;
  @Input() perPage:number;
  pageNo : number=1;

  @Output() onChangeEventEmitter : EventEmitter<number>=new EventEmitter<number>();
  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
      this.totalPages=Math.ceil(this.totalProducts/this.perPage);
  }
  
  ngOnInit(): void {
  }


  onNext(){
    this.setPage(Math.min(this.totalPages,this.pageNo+1));

  }

  onPrevious(){
    this.setPage(Math.max(1,this.pageNo-1));
  }


  setPage(pageNo : number){

    if(pageNo >=1 && pageNo<=this.totalPages){
      this.pageNo=pageNo;

      this.onChangeEventEmitter.emit(this.pageNo);
    }
  }

}
