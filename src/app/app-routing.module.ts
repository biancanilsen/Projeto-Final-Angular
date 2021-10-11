import { ReportPageComponent } from './report-page/report-page.component';
import { AdoptPageComponent } from './adopt-page/adopt-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PetComponent } from './pet/pet.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { PetPageComponent } from './pet-page/pet-page.component';
import { PetMenuComponent } from './pet-menu/pet-menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-sign-up', component: UserComponent },
  { path: 'pet-sign-up', component: PetComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-menu', component: UserMenuComponent },
  { path: 'pet-page/:id', component: PetPageComponent },
  { path: 'adopt-page', component: AdoptPageComponent },
  { path: 'pet-menu', component: PetMenuComponent },
  { path: 'report-page/:id', component: ReportPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
