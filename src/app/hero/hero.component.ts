
import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  hero=new Hero();
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
 // model = new Hero();
  modelList =[];
  submitted = false;
  model1=null;
  edit(id){
   // alert();
    this.hero = new Hero();
    this.hero.name='df'
  }
  getEmpdetailsById(){

  }
onSubmit(form: any) 
{ 

  
 // this.model1=heroDetails;
 console.log(form.value);
  //this.submitted = false; 
  this.modelList.push(form.value);
  console.log(this.modelList);
}

newHero() 
{
  console.log("newModel");
 // this.model = new Hero();
}
}
