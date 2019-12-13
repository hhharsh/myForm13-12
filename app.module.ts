import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule,Validator } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyComComponent } from './my-com/my-com.component';

import { ChildComponent } from './my-com/child/child.component';
import {Routes,RouterModule} from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    MyComComponent,

    ChildComponent
  ],
  imports: [
    FormsModule,
  
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
     
      {path:'user',component:MyComComponent}
          
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { 

  
}