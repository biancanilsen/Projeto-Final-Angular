import { UserService } from './../services/user.service';
import { User } from './../domain/user';
import { Pet } from './../domain/pet';
import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-page',
  templateUrl: './pet-page.component.html',
  styleUrls: ['./pet-page.component.css']
})
export class PetPageComponent implements OnInit {

  pet: Pet = new Pet;
  user: User = new User;

  constructor(public petService: PetService, public userService: UserService, private actRoute: ActivatedRoute) { 
    this.pet.id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.petService.getPet(this.pet.id);
    this.userService.getLogged
    this.user = this.userService.logged
  }

}
