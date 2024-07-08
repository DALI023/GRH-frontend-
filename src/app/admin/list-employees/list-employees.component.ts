import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";
import {AuthService} from "../../services/auth.service";
import {PagingConfig} from "../../models/paging-config.model";

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent implements OnInit{
  pagingConfig: PagingConfig = {} as PagingConfig;
  filteredUsers: User[] = [];
  searchText: string = '';
  currentPage:number  = 1;
  itemsPerPage: number = 7;
  totalItems: number = 0;
  constructor(private authService:AuthService,private router:Router,private tokenStorageService:StorageService){
    this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }
  }
  ToShow:User[]=[];
  loadUsers() {
    this.authService.getAllUsers().subscribe(
      (data) => {
        this.ToShow = data;
        this.filteredUsers = this.ToShow;
        console.log(this.filteredUsers)
      }

    );
  }

  ngOnInit(): void {
    this.loadUsers()
  }
  delete(idUser: any) {
    this.authService.removeUser(idUser).subscribe(
      data=>{
        window.location.reload();
      }
    )
  }
  filterUsers() {
    this.filteredUsers = this.ToShow.filter(
      (user) =>
        user.nom
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
    );
  }
  onTableDataChange(event:any){
    this.pagingConfig.currentPage  = event;
    this.loadUsers();
  }
}
