import {Component, OnInit} from '@angular/core';
import {CongeService} from "../services/conge.service";
import {Conge} from "../models/conge.model";
import {PagingConfig} from "../models/paging-config.model";
import {User} from "../models/user.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrl: './conge.component.css'
})
export class CongeComponent implements OnInit{
  ToShow:Conge[]=[]
  pagingConfig: PagingConfig = {} as PagingConfig
  filteredConges: Conge[] = []
  searchText: string = ''
  currentPage:number  = 1
  itemsPerPage: number = 7
  totalItems: number = 0
  ngOnInit(): void {
    this.loadConges()
  }
  constructor(private router:Router,private congeService: CongeService) {
    this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }
  }
  filterConges() {
    this.filteredConges = this.ToShow.filter(
      (conge) =>
        conge.status &&
        conge.status
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
    );
  }

  onTableDataChange(event:any){
    this.pagingConfig.currentPage  = event;
    this.loadConges();
  }
  loadConges(){
    this.congeService.getAllConges().subscribe(
      (data) => {
        this.ToShow = data
        this.filteredConges = this.ToShow
        console.log(this.filteredConges)
      }
    );
  }
  edit(idConge:any){
    this.router.navigate(["editConge/"+idConge]);
  }
}
