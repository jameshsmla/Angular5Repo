import { Component, OnInit } from '@angular/core';

import {Company} from './company';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }
  dropdownValues=["one","two"];
  ngOnInit() {
  }

  company= new Company("","");
  companies=[];
	onSubmit(){
    console.log( this.company.name+this.company.address);
    this.companies.push(this.company);
  }
}
