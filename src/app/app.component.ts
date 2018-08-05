import { Component, ViewChild } from '@angular/core';
import {NumberComponent} from './number/number.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng5crud';
  @ViewChild('mynewtext') mytext;



constructor(){
 // console.log("constructor---"+this.mytext);
}

  
  ngOnInit(){
    console.log("View Child---"+this.mytext);
  }


  @ViewChild(NumberComponent) private numberComponent: NumberComponent;
  
	increase() {
       this.numberComponent.increaseByOne();
	}
	decrease() {
       this.numberComponent.decreaseByOne();
	}

}
