import { UserService } from './user.service';
import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto-Final-Angular';
  user: User[] = [];

  constructor(private userServise: UserService) {}

  ngOnInit(): void{

  }
}
