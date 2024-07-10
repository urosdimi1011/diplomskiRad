import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IBrand } from 'src/app/interfaces/i-brand';
import { BrandService } from 'src/app/shared/services/brand.service';

@Component({
  selector: 'app-brand-slider',
  templateUrl: './brand-slider.component.html',
  styleUrls: ['./brand-slider.component.css']
})
export class BrandSliderComponent implements OnInit,AfterViewInit{

  allBrands : any;
  @ViewChild("efect") effect : ElementRef; 
  constructor(
    private brands : BrandService
  ) { }

  ngAfterViewInit(): void {
    this.getAllBrends();
  }

  getAllBrends(){
    this.brands.getAll().subscribe({
      next:(data)=>{
        setTimeout(() => {
          this.effect.nativeElement.click();
        });
        this.allBrands=data;
      },
      error:(err)=>{

      }
    })
  }



  ngOnInit(): void {
    this.getAllBrends();
  }

}
