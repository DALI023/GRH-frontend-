import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private userRole: string = ''; // Initialize with default role

  fetchRoles(userId: number): Observable<string[]> {
    // Example API call to fetch roles based on userId
    return this.http.get<string[]>(/*`/api/users/${userId}/roles`*/'');
  }

  hasRole(role: string): boolean {
    return this.userRole.includes(role);
  }

  setUserRole(role: string) {
    this.userRole = role;
  }

  getUserRole(): string {
    return this.userRole;
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }
  iEmployee():boolean{return this.userRole==='employee'}

  constructor(private http: HttpClient) { }
}
