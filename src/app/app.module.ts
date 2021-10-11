import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PetService } from './services/pet.service';
import { UserService } from './services/user.service';
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
import { RouterModule } from '@angular/router';
import { PetPageComponent } from './pet-page/pet-page.component';
import { AdoptPageComponent } from './adopt-page/adopt-page.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { PetMenuComponent } from './pet-menu/pet-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PetComponent,
    HomeComponent,
    UserLoginComponent,
    UserMenuComponent,
    DemoDropdownAnimatedComponent,
    PetPageComponent,
    AdoptPageComponent,
    ReportPageComponent,
    PetMenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule
  ],
  providers: [UserService, PetService, BsModalRef, BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
