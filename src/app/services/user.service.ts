import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = "https://localhost:44356/api/Users"
  constructor( private httpClient: HttpClient) { }

  public list: User[] = [];
  public formData: User = new User();
  public isNew : boolean = false;

  public logged: User = new User();

  getAllUsers(){
    this.httpClient.get<User[]>(this.BASE_URL ).subscribe((data) =>{
      console.log(data);
      this.list = data;
    })
  }

  getLogged(){
    this.logged.Name = "Cleitin"
    this.logged.CPF = "12345678910"
    this.logged.District = "Progresso"
    this.logged.Street = "Rua da Banana"
    this.logged.Email = "cleitin@hotmail.com"
    this.logged.House_number = "7"
    this.logged.Id = 10



  }

  getUser(id: number)
  {
    return this.httpClient.get<User>(this.BASE_URL+ `/${id}`).subscribe((data) =>
    {
      this.formData = data;
    })
  }

  postUser(){
    return this.httpClient.post(this.BASE_URL, this.formData).subscribe( () => {
      this.getAllUsers();
    });
  }

  updateUser(user:User){
    return this.httpClient.put<User>(this.BASE_URL+ `/${user.Id}`, user).subscribe( () => {
      this.getAllUsers();
    }); 
  }

  deleteUser(user: User){
    return this.httpClient.delete<User>(this.BASE_URL+ `/${user.Id}`).subscribe( () => {
      this.getAllUsers();
    })
  }
}


