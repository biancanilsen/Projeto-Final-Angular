import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PetComponent } from './pet/pet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'pet', component: PetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
