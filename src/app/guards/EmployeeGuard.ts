import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { StorageService} from "../services/storage.service";
import {UserRole} from "../models/roles.enum";


@Injectable({
  providedIn: 'root',
})
export class EmployeeGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.storageService.getUser().roles[0] == UserRole.Employee) {
      return true;
    } else {
      this.router.navigate(['access-denied']);
      return false;
    }
  }
}
