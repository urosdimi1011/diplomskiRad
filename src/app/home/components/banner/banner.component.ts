import { Component, Input, OnInit } from '@angular/core';
import { IBanner } from '../../interfaces/i-banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input('banner') banner : IBanner;

  constructor() { }

  ngOnInit(): void {

  }

}
