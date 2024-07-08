import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule, provideHttpClient, withFetch} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './authentification/login/login.component';
import { AdminComponent } from './admin/admin/admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminSideBarComponent } from './admin/admin-side-bar/admin-side-bar.component';
import { EmployeeSideBarComponent } from './employee/employee-side-bar/employee-side-bar.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ListEmployeesComponent } from './admin/list-employees/list-employees.component';
import { VacationReaquestsComponent } from './admin/vacation-reaquests/vacation-reaquests.component';
import { FAQComponent } from './faq/faq.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import {NgxPaginationModule} from "ngx-pagination";
import {Chart} from "chart.js";
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CongeComponent } from './conge/conge.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { IntrouvableComponent } from './introuvable/introuvable.component';
import { MescongesComponent } from './mesconges/mesconges.component';
import { AddcongeComponent } from './addconge/addconge.component';
import { EditCongeComponent } from './edit-conge/edit-conge.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AdminComponent,
    SidebarComponent,
    AdminSideBarComponent,
    EmployeeSideBarComponent,
    EmployeeComponent,
    HomeComponent,
    ListEmployeesComponent,
    VacationReaquestsComponent,
    FAQComponent,
    ToDoListComponent,
    MyProfileComponent,
    AddUserComponent,
    EditProfileComponent,
    CongeComponent,
    AccessdeniedComponent,
    IntrouvableComponent,
    MescongesComponent,
    AddcongeComponent,
    EditCongeComponent,
    AnnoncesComponent,
    AddAnnonceComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,

  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
