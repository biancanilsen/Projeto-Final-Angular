import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  constructor(public petService: PetService, private routerService: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: any){
    this.postPet();
    this.routerService.navigateByUrl('/pet-confirm')
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
