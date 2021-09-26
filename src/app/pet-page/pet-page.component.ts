import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-page',
  templateUrl: './pet-page.component.html',
  styleUrls: ['./pet-page.component.css']
})
export class PetPageComponent implements OnInit {

  constructor(public petService: PetService, public userService: PetService) { }

  ngOnInit(): void {
  }

}
