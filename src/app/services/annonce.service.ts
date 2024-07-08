import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Conge} from "../models/conge.model";
import {Annonce} from "../models/annonce.model";
const API="http://localhost:8075/annonce/";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http:HttpClient) { }
  getAllAnnonces():Observable<Annonce[]> {
    return this.http.get<Annonce[]>(API+"getAllAnnonces");
  }
  deleteAnnonce(idAnnonce: number): Observable<any> {
    return this.http.delete(API + 'deleteAnnonceById/' + idAnnonce);
  }
  addCongeandAffectToDepartement(idDepartement:any,data:any): Observable<any> {
    return  this.http.post(API+"addCongeandAffectToDepartement/"+idDepartement,data)
  }
}
