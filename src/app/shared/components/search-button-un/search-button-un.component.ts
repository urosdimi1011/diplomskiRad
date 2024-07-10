import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FilterFormService } from 'src/app/products/services/filter-form.service';

@Component({
  selector: 'app-search-button-un',
  templateUrl: './search-button-un.component.html',
  styleUrls: ['./search-button-un.component.css']
})
export class SearchButtonUnComponent implements OnInit {

  @Input('parent') parent : FormGroup;

  constructor(
    public filterAll: FilterFormService,
  ) { }

  ngOnInit(): void {
  }


}
