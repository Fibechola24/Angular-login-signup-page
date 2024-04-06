import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule, UserLoginComponent],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit{
// create an array to store the signup and also the objects
//then bind the objects to a form using ngModule
signupUsers: any[] = [];
signupObj: any = {
  username: '',
  email: '',
  password: '' 
};
loginObj: any = {
  userName: '',
  password: ''
};

  constructor() {}

  ngOnInit(): void { 

  }
  onSignUp(){
    //on sign up store the information provided by the user
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      username: '',
      email: '',
      password: ''
    };


  }
  OnLogin(){
    debugger
  //for login, read data from local storage
  //check is username or password is available then login
const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.username && m.password == this.loginObj.password);
if(isUserExist != undefined){
alert('User login Successfully');
}else{
  alert('Wrong credentials');
}
  }
}

