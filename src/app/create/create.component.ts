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
//listOfCompanies=[];
  company= new Company();
  sample=null;
  companies=[];
	onSubmit(){
    this.sample=null;
    this.sample=this.company;
    this.companies.push(this.sample);
    
  }
  showAll(){
    console.log(this.companies);
  }
}
