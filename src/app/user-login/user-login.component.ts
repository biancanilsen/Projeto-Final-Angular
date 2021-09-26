import { UserService } from '../services/user.service';
import { Pet } from './../domain/pet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
