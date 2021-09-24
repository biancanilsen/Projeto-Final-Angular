import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../pet.service';
import { UserService } from '../user.service';

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
    this.postPet();
    this.routerService.navigateByUrl('/pet-confirm')
    this.petService.formData.old_owner_id = this.userService.logged
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
