import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  constructor(public petService: PetService) { }

  ngOnInit(): void {
  }
  onSubmit(form: any){
    this.postPet();
  }
    update(){
      this.petService.updatePet(this.petService.formData);
    }
  
    getPet(){
      this.petService.getPet(this.petService.formData);
    }
    postPet(){
      this.petService.postPet();
    }
  
}
