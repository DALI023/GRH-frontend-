import {Component, OnInit} from '@angular/core';
import {StorageService} from "../services/storage.service";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent implements OnInit{

  user:any;
  isLoggedIn = false;
  id:any
  roleConnected?:any;
  constructor(private router:Router,private storageService: StorageService, private authService: AuthService) { }
  ngOnInit(): void {
    this.id=this.storageService.getUser().id
    this.roleConnected=this.storageService.getUser().roles[0]
    console.log(this.storageService.getUser().roles[0]);
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      this.user = this.storageService.getUser();
    }
  }
  gotToEdit(id: number) {
    this.router.navigate(['editprofile/'+id]);
  }

}
