import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { IContact } from '../interfaces/i-contact';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(
    private apiService : ContactService
  ) { }

  form : FormGroup = null;


  initilizeForm() : void {
    this.form=new FormGroup({
      name: new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
      email:new FormControl("",[Validators.required,Validators.minLength(4),Validators.email]) ,
      message:new FormControl("",[Validators.required]) 
    })
  }

  defualtRunValidation() : void{
    this.form.markAllAsTouched();
  }

  submitForm(): Observable<any> {
    const dataToSend = this.prepareDataToSend();

    //Ovde treba da ide create metod ali posto nemam u api-ju tabelu za komentare dohvaticu samo sve komentare
    // return this.apiService.create(dataToSend);
    
    return this.apiService.getAll();
  }

  prepareDataToSend(): IContact {
    let formValue = this.form.value;
    return {
      name: formValue.name,
      email: formValue.email,
      message: formValue.message,
    }
  }

  resetFormData() : void {
    this.form.reset();
  }
}
