// @ts-ignore

import {Component, OnInit} from '@angular/core';
import {StorageService} from "./services/storage.service";
import {AuthService} from "./services/auth.service";
import {RoleService} from "./services/role.service";

//This component is the root Component of our Angular 17 application,
// it defines the root tag: <app-root></app-root> that we use in index.html.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  admin:any;
  title = 'pfePoste';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showEmployeeBoard = false;
  username?: string;
  roleConnected: string | undefined;

  constructor(private storageService: StorageService, private authService: AuthService, private roleService: RoleService) {
  }


  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();


    if (this.isLoggedIn) {
      const user = this.storageService.getUser();

      // Fetch roles for the user
      this.roleService.fetchRoles(user.id).subscribe({
        next: roles => {
          this.showAdminBoard = roles.includes('ROLE_ADMIN');
          this.showEmployeeBoard = roles.includes('ROLE_EMPLOYEE');
          this.roleConnected = roles.includes('ROLE_ADMIN') ? 'admin' : roles.includes('ROLE_EMPLOYEE') ? 'employee' : '';
        },
        error: err => {
          console.error('Failed to fetch roles:', err);
          // Handle error appropriately
        }
      });

      this.username = user.username;
    }
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });


}
}
/*if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showEmployeeBoard = this.roles.includes('ROLE_EMPOYEE');

      this.username = user.username;
    }
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });*/
