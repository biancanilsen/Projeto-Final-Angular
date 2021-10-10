import { UserService } from '../services/user.service';
import { Pet } from './../domain/pet';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { User } from '../domain/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public userService: UserService, private routerService: Router) { }

  form_email: string = "";
  form_password: string = "";

  ngOnInit(): void {
    this.userService.getAllUsers()
  }

  verifyLogin(): void {
  
    let user_list: User[] = this.userService.list;
    for (let index = 0; index < user_list.length; index++) {

      if (user_list[index].Email == this.form_email && user_list[index].Password == this.form_password) {
        user_list[index].logged = true;
        this.userService.loggedUsers.push(user_list[index])
        this.routerService.navigateByUrl("/")
      }
      
      
    }
    
    
  }



}
