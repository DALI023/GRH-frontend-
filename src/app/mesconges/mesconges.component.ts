import {Component, OnInit} from '@angular/core';
import {StorageService} from "../services/storage.service";
import {CongeService} from "../services/conge.service";
import {Conge} from "../models/conge.model";
import {PagingConfig} from "../models/paging-config.model";

@Component({
  selector: 'app-mesconges',
  templateUrl: './mesconges.component.html',
  styleUrl: './mesconges.component.css'
})
export class MescongesComponent implements OnInit{
  id:any;
  constructor(private storageService:StorageService,private congeService:CongeService) {
    this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }
  }
  ToShow:Conge[]=[]
  pagingConfig: PagingConfig = {} as PagingConfig
  filteredConges: Conge[] = []
  searchText: string = ''
  currentPage:number  = 1
  itemsPerPage: number = 7
  totalItems: number = 0
  ngOnInit(): void {
    this.id=this.storageService.getUser().id
this.loadConges()
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
    this.congeService.getAllMyConges(this.id).subscribe(
      (data) => {
        this.ToShow = data
        this.filteredConges = this.ToShow
        console.log(this.filteredConges)
      }
    );
  }
  delete(id: any) {
    this.congeService.deleteConge(id).subscribe(
      data=>{
        window.location.reload();
      }
    )
  }
}
