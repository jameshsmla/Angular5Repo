import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
    setTimeout(() => console.log("setTimeout called!"), 1000);

  }
  message:string ='';
  count:number = 0;
  
 

	increaseByOne() {

	   this.count = this.count + 1;
     this.message = "Counter: " + this.count;
    var fruits = ['cheese', 'lettuce'];

    fruits.forEach((fruit,index) => {
       console.log(index+"-"+fruit);
       
      });

	}
	decreaseByOne() {
	   this.count = this.count - 1;
	   this.message = "Counter: " + this.count;
	}
}
