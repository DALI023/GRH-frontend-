import {Component, OnInit} from '@angular/core';
import {StorageService} from "../services/storage.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showEmployeeBoard = false;
  username?: string;
  email?: string;
  img?:string
  nom?:string
  prenom?:string
  roleConnected?:any
  constructor(private storageService: StorageService, private authService: AuthService) { }


  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roleConnected=this.storageService.getUser().roles[0];
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showEmployeeBoard = this.roles.includes('ROLE_EMPOYEE');
this.nom=user.nom
      this.prenom=user.prenom
      this.username = user.username;
      this.email=user.email;
      this.img=user.img;
    }
  }

  logout(): void {
    this.storageService.clean();
    window.location.reload();
  }

}
