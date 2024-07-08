import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageService} from "./storage.service";
import{Router} from "@angular/router";

/*This service provides methods to access public and protected resources.
Because HttpOnly Cookies will be automatically sent along with HTTP requests (via Http Interceptor),
so we just simply use Http module without caring about JWT.*/


const AUTH_API = 'http://localhost:8080/api/test/'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient, private storageService: StorageService,private router:Router) {}

  login(username: string, password: string,twofactorcode: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'authenticate',
      {
        username,
        password,
        twofactorcode,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string, tel: string, image: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
        tel,
        image,
      },
      httpOptions
    );
  }



  logout(): void {

    document.cookie = 'teymour=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure';

    this.storageService.clean();
  }



  getAllUsers(): Observable<any> {
    return this.http.get(AUTH_API + 'users');
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(AUTH_API + 'users/' + userId);
  }

  modifyUser(userId: number, user: any): Observable<any> {
    return this.http.put(AUTH_API + 'users/' + userId, user, httpOptions);
  }
  activate2FA(userId: number): Observable<any> {
    return this.http.post(
      AUTH_API + `activate-2fa/${userId}`,
      {},
      httpOptions
    );
  }
  modifyUserProfile(userId: number, userProfile: any): Observable<any> {
    return this.http.put(
      AUTH_API + 'profile/' + userId,
      userProfile,
      httpOptions
    );
  }
  activateExposant(userId: number): Observable<any> {
    return this.http.post(
      AUTH_API + `activateExposant/${userId}`,
      {},
      httpOptions
    );
  }
  registerWithGoogle(): Observable<any> {
    return this.http.post(AUTH_API + 'register-with-google', {}, {});
  }
  verifyPhoneNumber(userId: number, code: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'verify-code',
      {
        userId,
        code
      },
      httpOptions
    );
  }}
