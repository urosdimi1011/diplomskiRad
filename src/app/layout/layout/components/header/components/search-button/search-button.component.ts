import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.css']
})
export class SearchButtonComponent implements OnInit,AfterViewInit {

  allCategories:any=[];

  constructor(
    private categories : CategoriesService
  ) { }

  ngAfterViewInit(): void {
    this.getAllCategories();
  }

  ngOnInit(): void {

  }

  getAllCategories() : void{
    this.categories.getAll().subscribe({
      next:(data)=>{
        this.allCategories=data;

        console.log(this.allCategories);
      },
      error:()=>{

      }
    })
  }

}
