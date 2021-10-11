import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pet-menu',
  templateUrl: './pet-menu.component.html',
  styleUrls: ['./pet-menu.component.css']
})
export class PetMenuComponent implements OnInit {

  constructor(public petService: PetService, public userService: UserService) { }

  ngOnInit(): void {
    this.petService.getAllPets();
    this.userService.getLogged
  }

}
