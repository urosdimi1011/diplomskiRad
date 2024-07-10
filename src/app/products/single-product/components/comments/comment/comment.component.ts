import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, animateChild, group, query, state, style, transition, trigger} from '@angular/animations';
import { CommentService } from '../services/comment.service';
import { FormControl, FormGroup } from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { TOKEN_KEY } from 'src/app/constats/const';
import { IToken } from 'src/app/authentification/components/login/interfaces/i-token';
import { ITokenCart } from 'src/app/cart/cart/interfaces/i-cart';
import swall from 'sweetalert';
import { Router } from '@angular/router';
import { CommentFormService } from '../services/comment-form.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  animations: [

    trigger('ngIfAnimation',[
      transition('void => *',[
        style({opacity:0}),
        animate(450,style({height : 'max-content', opacity : 1}))
      ]),
      transition('* => void',[
        style({opacity:1}),
        animate(700,style({height : '0px', opacity : 0}))
      ])
    ])

  ]

})
export class CommentComponent implements OnInit {

  @Input('comm') comm : any; 
  @Input('class') class : any; 
  @Output('isAdded') isAdded : EventEmitter<boolean> = new EventEmitter<boolean>(); 

  show:boolean = false;
  showForm:boolean = false;

  @Input('productId') productId : number;


  constructor(
    private commentService : CommentService,
    private router : Router,
    public commentFrom : CommentFormService
  ) {
   }

  ngOnInit(): void {
    this.commentFrom.initilizeForm();
    this.commentFrom.defualtRunValidation();
    
  }

  toggle() {
    this.show = !this.show;
  }

  openModalWithComment(){

    this.showForm=!this.showForm;

  }

  addComment(parentId? : number){

    this.commentFrom.addComment(this.productId,parentId).subscribe({
      next:(data)=>{
        swall("you have successfully added a comment");
        this.isAdded.emit(true);
      },
      error:(xhr)=>{
        console.log(xhr);
      }
    })
  }

  
  errorMess(controlName: string, errorName: string){
    return this.commentFrom.form.get(controlName)?.hasError(errorName);
}
}
