import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule],
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
 
}

