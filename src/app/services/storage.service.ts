/*import { Injectable } from '@angular/core';
const USER_KEY='auth-user';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  clean(): void{window.sessionStorage.clear();
  }

  public saveUser(user:any):void{
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}*/

import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  public isLoggedIn(): boolean {

    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }
    return false;
  }

  public getUserRole(): string | null {
    const user = this.getUser();
    if (user && user.role) {
      return user.role;
    }
    return null;
  }

  public isAdmin(): boolean {
    const user = this.getUser();
    return user && user.role === 'admin';
  }

  public isEmployee(): boolean {
    const user = this.getUser();
    return user && user.role === 'employee';
  }
}

