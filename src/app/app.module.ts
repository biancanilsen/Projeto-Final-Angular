import { PetService } from './pet.service';
import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PetComponent } from './pet/pet.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { DemoDropdownAnimatedComponent } from './btn-dropdown/btn-dropdown.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PetComponent,
    HomeComponent,
    UserLoginComponent,
    UserMenuComponent,
    DemoDropdownAnimatedComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [UserService, PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
