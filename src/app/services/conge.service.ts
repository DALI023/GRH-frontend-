import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Conge} from "../models/conge.model";
const API="http://localhost:8075/conge/";

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  constructor(private http:HttpClient) { }
  addCongeandAffectToUser(idUser:any,data:any): Observable<any> {
    return  this.http.post(API+"addCongeandAffectToUser/"+idUser,data)
  }

  getAllConges():Observable<Conge[]> {
    return this.http.get<Conge[]>(API+"getAllConges");
  }
  getAllMyConges(idUser:any):Observable<Conge[]> {
    return this.http.get<Conge[]>(API+"getMyConges/"+idUser);
  }
  deleteConge(idConge: number): Observable<any> {
    return this.http.delete(API + 'deleteCongeById/' + idConge);
  }
  modifyConge(data:any):Observable<any>{
    return this.http.put(API+'updateConge',data);
  }
  getConge(idConge:any): Observable<Conge[]> {
    return this.http.get<Conge[]>(API+"getCongeById/" + idConge);
  }
}
