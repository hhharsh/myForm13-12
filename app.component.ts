import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { User } from './User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hhharsh';

  users:User[]=[
    new User("harsh",2),
    new User("roh",7)
  ];

  ngOnInit(){
  
  }
  


  @ViewChild('f', {static: true}) signupForm: NgForm;

  formSubmit(){
    console.log(this.signupForm);
    let u1=this.signupForm.value.username;
    let p1=this.signupForm.value.password;

    this.users.push(new User(u1,5));
  }

  public fun2():void{
    let arr=[3,2,1];
    
    for(let i of arr){
      console.log(i)
    }
  }
}
