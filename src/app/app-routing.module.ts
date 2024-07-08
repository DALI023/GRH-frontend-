/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {signupComponent} from "./authentification/sign-up/sign-up.component";
import {LoginComponent} from"./authentification/login/login.component"
import {DashbordComponent} from "./dashbord/dashbord/dashbord.component";
import {AdminComponent} from "./admin/admin/admin.component";
import {EmployeeComponent} from "./employee/employee/employee.component";
import {EmployeeGuard} from "./guards/EmployeeGuard";
import {AdminGuard} from "./guards/AdminGuards";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  /*{path:'sign-Up',component:signupComponent},
  {path:'login',component: LoginComponent},
  {path:'dashboard',component:DashbordComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'employee', component: EmployeeComponent, canActivate: [EmployeeGuard] },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
*/
  /*{ path:'', component: HomeComponent }, // Add the ROUTES array to the children property of the HomeComponent route
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentification/login/login.component';
import { AdminComponent } from './admin/admin/admin.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { EmployeeGuard } from './guards/EmployeeGuard';
import { AdminGuard } from './guards/AdminGuards';
import { HomeComponent } from './home/home.component';
import {ListEmployeesComponent} from "./admin/list-employees/list-employees.component";
import {MyProfileComponent} from "./my-profile/my-profile.component";
import {ToDoListComponent} from "./to-do-list/to-do-list.component";
import {FAQComponent} from "./faq/faq.component";
import {AddUserComponent} from "./admin/add-user/add-user.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import {CongeComponent} from "./conge/conge.component";
import {AccessdeniedComponent} from "./accessdenied/accessdenied.component";
import {IntrouvableComponent} from "./introuvable/introuvable.component";
import {MescongesComponent} from "./mesconges/mesconges.component";
import {AddcongeComponent} from "./addconge/addconge.component";
import {EditCongeComponent} from "./edit-conge/edit-conge.component";
import {AnnoncesComponent} from "./annonces/annonces.component";
import {AddAnnonceComponent} from "./add-annonce/add-annonce.component";

const routes: Routes = [

  { path: '', redirectTo:'home',pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home',component: HomeComponent },
 /* { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'employee', component: EmployeeComponent, canActivate: [EmployeeGuard] },*/
  { path: 'listEmployee',component:ListEmployeesComponent, canActivate: [AdminGuard]},
  { path: 'my-profile',component:MyProfileComponent},
  { path: 'editprofile/:idUser',component:EditProfileComponent,canActivate: [EmployeeGuard] },
  { path: 'todo-list',component:ToDoListComponent},
  { path: 'faq',component:FAQComponent},
  { path: 'addUser',component:AddUserComponent, canActivate: [AdminGuard] },
  { path: 'conges', component: CongeComponent,canActivate:[AdminGuard] },
  { path: 'cngess', component: MescongesComponent,canActivate:[EmployeeGuard] },
  { path: 'access-denied',component:AccessdeniedComponent},
  { path: 'addConge',component:AddcongeComponent, canActivate: [EmployeeGuard] },
  { path: 'editConge/:idConge',component:EditCongeComponent,canActivate: [AdminGuard] },
  { path: 'annonces',component:AnnoncesComponent },
  { path:  'addAnnonce',component:AddAnnonceComponent,canActivate: [AdminGuard] },
  { path: '**',component:IntrouvableComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

