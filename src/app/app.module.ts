import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { NumberComponent } from './number/number.component';
import { HeroComponent } from './hero/hero.component';
import { FormsModule} from '@angular/forms';
import { MyserviceService } from './myservice.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    NumberComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
