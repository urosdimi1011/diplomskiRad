import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IContact } from './interfaces/i-contact';
import { ContactFormService } from './services/contact-form.service';
import swall from 'sweetalert';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    public formService : ContactFormService
  ) { }

  ngOnInit(): void {
    this.formService.initilizeForm();
    this.formService.defualtRunValidation();
  }


  sendEmail() : void {
    this.formService.submitForm().subscribe({
      next : (data)=>{  
        swall("you have successfully send a message");
        this.formService.resetFormData();
      },
      error : (err) => {
        console.log("not ok");
      }
    })
  }


  errorMess(controlName: string, errorName: string){
      return this.formService.form.get(controlName)?.hasError(errorName);
  }



}
