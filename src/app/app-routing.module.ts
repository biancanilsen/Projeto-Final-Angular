import { UserLoginComponent } from './user-login/user-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PetComponent } from './pet/pet.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { PetConfirmComponent } from './pet-confirm/pet-confirm.component';
import { UserConfirmComponent } from './user-confirm/user-confirm.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-sign-up', component: UserComponent },
  { path: 'pet-sign-up', component: PetComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-menu', component: UserMenuComponent },
  { path: 'pet-confirm', component: PetConfirmComponent },
  { path: 'user-confirm', component: UserConfirmComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
