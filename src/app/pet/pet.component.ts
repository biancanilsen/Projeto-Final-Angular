import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../services/pet.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  constructor(public petService: PetService, public userService: UserService, private routerService: Router) { }

  ngOnInit(): void {
    this.userService.getLogged();
  }
  onSubmit(form: any){
    this.petService.formData.current_owner = this.userService.logged
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
