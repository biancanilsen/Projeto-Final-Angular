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
    
    const list: User[] = this.userService.list;
    for (let index = 0; index < list.length; index++) {

      if (list[index].Email == this.form_email && list[index].Password == this.form_password) {
        list[index].logged = true;
        this.userService.loggedUsers.push(list[index])
        this.routerService.navigateByUrl("/")
      }
      debugger
    }
    
  }



}
