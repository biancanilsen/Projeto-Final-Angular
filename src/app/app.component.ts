import { UserService } from './services/user.service';
import { User } from './domain/user';
import { PetService } from './services/pet.service';
import { Pet } from './domain/pet';
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
