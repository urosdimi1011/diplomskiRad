import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { TOKEN_KEY } from 'src/app/constats/const';
import { CommentService } from './comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentFormService {

  constructor(
    private commentService : CommentService
  ) { }


  form : FormGroup = null;


  initilizeForm() : void {
    this.form=new FormGroup({

      title:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(20)]),
      comment: new FormControl('',[Validators.required,Validators.minLength(20),Validators.maxLength(40)]),
      
    })
  }

  defualtRunValidation() : void{
    this.form.markAllAsTouched();
  }


  resetFormData() : void {
    this.form.reset();
  }

  prependToSend(data : any,id : number,user_id:number,productId : number){
    return {
      Title:data.title,
      Comments:data.comment,
      parent_comment_id : id != null?id : null,
      product_id : productId,
      user_id : user_id
    }
  }

  addComment(productId : number,parentId? : number){
    let user : any = localStorage.getItem(TOKEN_KEY)?
                      jwtDecode(localStorage.getItem(TOKEN_KEY)):
                      null;

    if(user !=null){
      let all=this.form.getRawValue();
      let dataForSend=this.prependToSend(all,parentId,user.UserId,productId);

      return this.commentService.create(dataForSend)
    }
    else{
      // swall("You must login to be add comment");
      return new Observable;
    }
  }
}
