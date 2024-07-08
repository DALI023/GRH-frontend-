import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {StorageService} from "../services/storage.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  roleConnected?: any;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    //console.log(this.storageService.getUser().roles[0])
    this.roleConnected=this.storageService.getUser().roles[0] ; // Replace with actual role fetching logic
  }

}
