import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICategories } from 'src/app/interfaces/i-categories';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.css']
})
export class SliderItemComponent implements OnInit, OnChanges{

  active=0;
  productsAll:any=[];
  categoriesAll:any=[];
  propertyForSort:any;
  @Input("typeForSort") activeType:string;

  arrayForSort={
    "sell":{
      prop:"precenteSale",
      style:"<span class='discount'>SELL</span>"
    },
    "new":{
      prop:"dateFrom",
      style:"<span class='new'>NEW</span>"
    }
  }

  constructor(
    private products : ProductsService,
    private categories : CategoriesService
  ) { 

  }
  ngOnChanges(changes: SimpleChanges): void {
    type ObjectKey=keyof typeof this.arrayForSort;
    const moje = changes['activeType'].currentValue as ObjectKey;
    this.propertyForSort=this.arrayForSort[moje];

    console.log(this.propertyForSort);

  }
  ngOnInit(): void {
    this.getAllProducts();

    this.getAllCategories();
  }

  getAllProducts() : void{
    this.products.getAll().subscribe({
      next: (data) =>{
        this.productsAll=data;

        console.log(data);
      },
      error:(err)=>{

      }
    });
  }

  getAllCategories() : void{
    this.categories.getAll().subscribe({
      next: (data) =>{
        this.categoriesAll=data;



        console.log(this.categoriesAll);
      },
      error:(err)=>{

      }
    })
  }
  
  getProductsFromFilterCategories(idCat:number):ICategories[]{
      let a= this.productsAll.filter((a : any)=>{
      if(a.hasOwnProperty(this.propertyForSort.prop)){
        return a.categories.some((x:any)=>{
          return x.id==idCat;
        })
      }
    }).sort((x : any,y : any)=>{
      // console.log(new Date(x[this.propertyForSort.prop]).getMilliseconds());
      if(new Date(x[this.propertyForSort.prop])< new Date(y[this.propertyForSort.prop])){
        return 1;
      }
      
      if(new Date(x[this.propertyForSort]) > new Date(y[this.propertyForSort])){

        return -1;
      }

      return 0;
    }).splice(0,4);

    return a;
  }

}
