import { Component, ViewChild } from '@angular/core';
import {NumberComponent} from './number/number.component'
import { MyserviceService } from './myservice.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng5crud';
  @ViewChild('mynewtext') mytext;


  constructor(private myservice: MyserviceService,private http: Http) {}


  
  ngOnInit(){
    console.log("Service call---"+this.myservice.showTodayDate());
     this.http.get("http://jsonplaceholder.typicode.com/users").
     map((response) => response.json()).
     subscribe((data) => console.log(data))

  }


  @ViewChild(NumberComponent) private numberComponent: NumberComponent;
  
	increase() {
       this.numberComponent.increaseByOne();
	}
	decrease() {
       this.numberComponent.decreaseByOne();
	}

}
