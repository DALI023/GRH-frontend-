import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {Departement} from "../models/departement.model";
const API="http://localhost:8075/departement/";

@Injectable({
  providedIn: 'root'
})

export class DepartementService {

  constructor(private http:HttpClient) { }
  getAllDepartements(): Observable<Departement[]> {
    return this.http.get<Departement[]>(API+'getAllDepartements' );
  }

}
