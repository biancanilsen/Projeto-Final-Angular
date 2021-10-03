import { UserService } from '../services/user.service';
import { PetService } from './../services/pet.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../domain/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public petService: PetService, public userService: UserService) { }

  
  
  ngOnInit(): void {
    this.petService.getAllPets();
    this.userService.getLogged();
  }
  getUser(id: number): void{
   this.userService.getUser(id);
  }

}
