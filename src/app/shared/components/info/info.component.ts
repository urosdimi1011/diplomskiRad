import { Component, OnInit } from '@angular/core';
import { IInfo } from 'src/app/interfaces/i-info';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  info:any;

  constructor(
    private infoAll : InfoService
  ) { }

  ngOnInit(): void {
    this.getAllInfo()
  }

  getAllInfo(){
    this.infoAll.getAll().subscribe({
      next:(data)=>{
        this.info=data
      },
      error:(xhr)=>{

      }
    })
  }
}
