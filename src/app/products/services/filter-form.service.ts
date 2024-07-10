import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FilterFormService {

  form : FormGroup=new FormGroup({});

  constructor() {

    this.form=new FormGroup({
      keywords:new FormControl(''),
      perPage: new FormControl(4),
      rangeForPrice: new FormControl(200),
      sortProducts : new FormControl('defalut')
    })

   }


   createCheckBoxFilter(items : any[],checkedElement: any[]=[]): FormArray{
     const formElemnt= new FormArray([]);

     items.forEach(x=>formElemnt.push(new FormControl(checkedElement.includes(x))))
     
     return formElemnt;
   }

   
}
