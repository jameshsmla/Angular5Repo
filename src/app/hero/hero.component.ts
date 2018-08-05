import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero";
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
modelList=[];
submitted = false;

onSubmit() { this.submitted = true; 

this.modelList.push(this.model);
console.log(this.modelList);
}

newHero() 
{
  console.log("newModel");
this.model = new Hero(42, '', '');
}
}
