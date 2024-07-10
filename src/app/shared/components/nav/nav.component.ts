import { Component, Input, OnInit } from '@angular/core';

import {nav} from "src/app/constats/const";
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() classToStyle : string;
  navigation:any;
  constructor() {
    this.classToStyle="main-menu";
   }

  ngOnInit(): void {
    this.navigation=nav;
  }

}
