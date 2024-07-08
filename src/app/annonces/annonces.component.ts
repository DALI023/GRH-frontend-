import {Component, OnInit} from '@angular/core';
import {Conge} from "../models/conge.model";
import {PagingConfig} from "../models/paging-config.model";
import {Router} from "@angular/router";
import {CongeService} from "../services/conge.service";
import {Annonce} from "../models/annonce.model";
import {AnnonceService} from "../services/annonce.service";
import {StorageService} from "../services/storage.service";

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrl: './annonces.component.css'
})
export class AnnoncesComponent implements OnInit{
  ToShow:Annonce[]=[]
  pagingConfig: PagingConfig = {} as PagingConfig
  filteredAnnonces: Annonce[] = []
  searchText: string = ''
  currentPage:number  = 1
  itemsPerPage: number = 7
  totalItems: number = 0
  roleConnected?:any;
  ngOnInit(): void {
    this.loadAnnonces()
    this.roleConnected=this.storageService.getUser().roles[0]
  }
  constructor(private storageService:StorageService,private router:Router,private annonceService: AnnonceService) {
    this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }
  }
  filterAnnonces() {
    this.filteredAnnonces = this.ToShow.filter(
      (annonce) =>
        annonce.titre &&
        annonce.titre
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
    );
  }


  onTableDataChange(event:any){
    this.pagingConfig.currentPage  = event;
    this.loadAnnonces();
  }
  loadAnnonces(){
    this.annonceService.getAllAnnonces().subscribe(
      (data) => {
        this.ToShow = data
        this.filteredAnnonces = this.ToShow
        //console.log(this.filteredConges)
      }
    );
  }
  deleteAnnonce(id:any){
    this.annonceService.deleteAnnonce(id).subscribe(
      data=>{
        window.location.reload();
      }
    )
  }

}
