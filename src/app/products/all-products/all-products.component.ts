import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, filter, forkJoin } from 'rxjs';
import { ICategories } from 'src/app/interfaces/i-categories';
import { IProduct } from 'src/app/interfaces/i-product';
import { SpinnerFunctions } from 'src/app/shared/classes/spinner-functions';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { FilterFormService } from '../services/filter-form.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  showPerPage=4;
  totalProducts=0;

  allCategories:any;
  allProducts : any;


  isValue:number=1;
  changeDisplay:string;

  filterProducts:any=[];
  constructor(
    private cat : CategoriesService,
    public filterFromService : FilterFormService,
    private productService : ProductsService,
  ) {
   }

  ngOnInit(): void {
    SpinnerFunctions.showSpinner();
    forkJoin({
      getCategories:this.cat.getAll(),
      getProducts:this.productService.getAll()
    }).subscribe(({getCategories,getProducts})=>{
      this.allCategories=getCategories;
      this.allProducts=getProducts;


      console.log(this.allProducts);

      SpinnerFunctions.hideSpinner();
      this.getAllFilter();
      this.setFormCategories();

      this.filterFromService.form.valueChanges.subscribe({
        next:()=>this.getAllFilter()
      })      

    },error=>{
      console.error(error);
      SpinnerFunctions.hideSpinner();
    });
  }

  setFormCategories(){
    this.filterFromService.form.setControl('categories',
    this.filterFromService.
      createCheckBoxFilter(this.allCategories.map((x : any)=>x.id)));
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + '$';
    }
    return value + '$';
  }

  filterByKeyword(arr: IProduct[],keyword :any) : IProduct[]{
    if(!!keyword)
      return arr.filter((i : IProduct)=>i.name.toLowerCase().includes(keyword.trim().toLowerCase()));
    else 
      return arr;
  }


  filterFromPrice (arr: IProduct[], price : number) : IProduct[]{
    return arr.filter((i : IProduct)=>price>=i.price)
  }

  sortingProduct(arr:IProduct[],conditionSort:string) : IProduct[]{

    return arr.sort((x : IProduct,y : IProduct)=>{
        if(conditionSort=="asc")
         return x.price - y.price
        else if(conditionSort=="desc")
          return y.price - x.price
        return 0;
    });

  }

  getAllFilter(page : number = 1) : void{


    this.filterProducts=this.allProducts;
  
    let filterAll: any=this.filterFromService.form.value;
    
    this.showPerPage=Number(filterAll.perPage);

    let checkBoxFilter : any = Object.fromEntries(Object.entries(filterAll).filter(el=>Array.isArray(el[1])));


    this.filterProducts=this.filterByKeyword(this.filterProducts,filterAll.keywords);

    this.filterProducts=this.applyCheckbox(this.filterProducts,checkBoxFilter);

    this.filterProducts=this.filterFromPrice(this.filterProducts,filterAll.rangeForPrice);



    this.filterProducts=this.sortingProduct(this.filterProducts,filterAll.sortProducts);
    
    this.totalProducts=this.filterProducts.length


    
    const startIndex = (page - 1) * (this.showPerPage);
    const endIndex = startIndex + this.showPerPage

    this.filterProducts=this.filterProducts.slice(startIndex,
        endIndex);  


    
  }

  getValuesOfSelectedCheckboxes(controlName: string): number[] | string[] {
    const formValue = this.filterFromService.form.getRawValue();

    let selected = this.allCategories.filter((value : any, index: any) => 
                  formValue[controlName][index]).map((d : any) => d.id);

    return selected;
  }

  applyCheckbox(arr : IProduct[], checkBox  : any) : IProduct[]{

    for(let name in checkBox){

      let checked : any = this.getValuesOfSelectedCheckboxes(name);

      if(!checked.length){
        continue;
      }

      arr=arr.filter((product : any)=>{

        if(Array.isArray(product[name])){
          return product[name].some((e : any)=>{
            return checked.includes(e.id);

          });
        }

        return checked.includes(product[name]);
      })

    }
    return arr;
  }




  changeStyleDisplay(style :string,num : number) : void{
    this.changeDisplay=style;

    this.isValue=num;
  }
  

}
