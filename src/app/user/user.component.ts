import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService, private routerService: Router) { }

  ngOnInit(): void {}
  
  onSubmit(form : any){
      this.postUser(); 
      this.routerService.navigateByUrl("/user-confirm")
  }

  update(){
    this.userService.updateUser(this.userService.formData);
  }

  getUser(){
    this.userService.getUser(this.userService.formData.Id);
  }

  postUser(){
    this.userService.postUser();
  }
}
