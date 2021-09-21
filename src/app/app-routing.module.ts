import { UserLoginComponent } from './user-login/user-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PetComponent } from './pet/pet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-sign-up', component: UserComponent },
  { path: 'pet-sign-up', component: PetComponent },
  { path: 'user-login', component: UserLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
