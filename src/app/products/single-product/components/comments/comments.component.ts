import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { IProduct } from 'src/app/interfaces/i-product';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ProductsDataForModalService } from 'src/app/shared/components/slider-item/components/item/services/products-data-for-modal.service';
import { IComment } from './interfaces/i-comment';
import { CommentService } from './services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments : Array<IComment>;
  @Input('product') product : number;
  constructor(public commentService : CommentService) { }



  ngOnInit(): void {
    this.getAll();
  }



  getAll(){
    console.log(this.product);
    this.commentService.get(this.product).subscribe({
      next:(data)=>{
        this.comments=data;
      },
      error:(xhr)=>{
        console.log(xhr);
      }
    })
  }

  reloadComment(e : boolean){
    if(e){
      this.getAll();
    }
  }
}
