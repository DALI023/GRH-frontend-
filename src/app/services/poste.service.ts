import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Departement} from "../models/departement.model";
import {Poste} from "../models/poste.model";
const API="http://localhost:8075/poste/";

@Injectable({
  providedIn: 'root'
})
export class PosteService {

  constructor(private http:HttpClient) { }
  getAllPostes(): Observable<Poste[]> {
    return this.http.get<Poste[]>(API+'getAllPostes' );
  }
}
