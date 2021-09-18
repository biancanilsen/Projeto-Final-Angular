import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit(form : any){
    if(this.userService.isNew){
      this.postUser(); 
    } else{
      this.update();
    }
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
