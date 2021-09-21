import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UserService } from '../user.service';

=======
>>>>>>> e3b8664448a86d94dcc519b5a6cae3536a5a31e6
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {}
  
  onSubmit(form : any){
      this.postUser(); 
  }

  update(){
    this.userService.updateUser(this.userService.formData);
  }

  getUser(){
    this.userService.getUser(this.userService.formData);
  }

  postUser(){
    this.userService.postUser();
  }
}
