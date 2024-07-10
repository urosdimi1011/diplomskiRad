import { Component, Input, OnInit } from '@angular/core';
import { IBanner } from '../interfaces/i-banner';
import { BannerService } from '../services/banner.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  allBanner : IBanner[];
  constructor(
    public bannerSevice : BannerService
  ) { }

  ngOnInit(): void {
    this.getAllBanner();
    // this.bannerSevice.bannerForSort(this.type,this.number);
  }


  getAllBanner(){
    this.bannerSevice.getAll().subscribe({
      next:(data : any)=>{
        this.allBanner=data;
      },
      error:(xhr : any)=>{
        
      }
    })
  }

   bannerForSort(type:string,numberUsing:number) : IBanner[]{
    return this.allBanner.filter((x : any)=>{
      if(x.type == type )
        return true;
      return false;
    }).slice(0,numberUsing);
  }

}
