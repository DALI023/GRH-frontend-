import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable, pipe, tap} from "rxjs";
import {User} from "../models/user.model";

const AUTH_API="http://localhost:8075/api/auth";
const httpOptions={
  headers : new HttpHeaders({'content-type':'appliction/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any;

  constructor(private http:HttpClient) { }
  login(username:string,password:string):Observable<any>{
  return this.http.post(AUTH_API+'/signin',{
    username,
    password,
  })
}

  register(cin: number, username: string, nom: string, prenom: string, age: number, sexe: string, img: string, email: string, password: string, posteId: number, departementId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(
      AUTH_API + '/signup',
      {
        cin,
        username,
        nom,
        prenom,
        age,
        sexe,
        img,
        email,
        password,
        poste: { idPoste: posteId },
        departement: { id: departementId }
      },
      httpOptions
    );
  }


  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
  getUserRole() {
    return this.currentUser?.role;
  }
  getToken(): string | null {
    return localStorage.getItem('accessToken'); // Retrieve token from localStorage
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(AUTH_API+'/getallusers' );
  }
  removeUser(idUser: any): Observable<any> {
    return this.http.delete(AUTH_API+'/supprimerUser/' + idUser);
  }
  getUser(idUser:any): Observable<User[]> {
    return this.http.get<User[]>(AUTH_API+'/getUserById/' + idUser);
  }
  modifyUserProfile(idUser: number, cin: number, username: string, nom: string, prenom: string, age: number, sexe: string, img: string, email: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const modifyRequest = {
      cin,
      username,
      nom,
      prenom,
      age,
      sexe,
      img,
      email,

    };

    return this.http.put(AUTH_API + '/modifyMyProfile/' + idUser, modifyRequest, httpOptions);
  }

}
