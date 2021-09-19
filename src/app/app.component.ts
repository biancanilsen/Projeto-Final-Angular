import { UserService } from './user.service';
import { User } from './user';
import { PetService } from './pet.service';
import { Pet } from './pet';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto-Final-Angular';
  user: User[] = [];
  pet: Pet[] = [];

  constructor(private userServise: UserService, private petServise: PetService) {}
  
  ngOnInit(): void{

  }
}
