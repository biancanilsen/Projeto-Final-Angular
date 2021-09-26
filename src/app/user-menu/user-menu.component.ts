import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this.update();
  }
  //PRECISA PEGAR O OBJETO DO USUARIO LOGADO
  update() {
    this.userService.updateUser(this.userService.formData);
  }

  postUser() {
    this.userService.postUser();
  }
}

