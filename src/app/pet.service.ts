import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from './pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  BASE_URL = "https://localhost:44356/api/Pets"
  constructor (private httpClient: HttpClient) { }

  public list: Pet[] = [];
  public formData: Pet = new Pet()
  public isNew : boolean = false;

  getAllPets(){
    this.httpClient.get<Pet[]>(this.BASE_URL ).subscribe((data) =>{
      console.log(data);
      this.list = data;
    })
  }

  getPet(pet: Pet)
  {
    return this.httpClient.get<Pet>(this.BASE_URL+ `/${pet.Id}`) 
  }

  postPet(){
    return this.httpClient.post(this.BASE_URL, this.formData).subscribe( () => {
      this.getAllPets();
    });
  }

  updatePet(pet: Pet){
    return this.httpClient.put<Pet>(this.BASE_URL+ `/${pet.Id}`, pet).subscribe( () => {
      this.getAllPets();
    }); 
  }

  deletePet(pet:Pet){
    return this.httpClient.delete<Pet>(this.BASE_URL+ `/${pet.Id}`).subscribe( () => {
      this.getAllPets();
    })
  }
}
