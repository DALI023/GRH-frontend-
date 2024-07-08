import {Component, OnInit} from '@angular/core';
import {CongeService} from "../services/conge.service";
import {StorageService} from "../services/storage.service";
import {Conge} from "../models/conge.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addconge',
  templateUrl: './addconge.component.html',
  styleUrl: './addconge.component.css'
})
export class AddcongeComponent implements OnInit {

  conge: Conge = {
    dateDebut: new Date(),
    dateFin: new Date(),
    raison: '',

    status: 'encours'
  };

  submitted = false;
  ngOnInit(): void {
  }
  constructor(private router:Router,private congeService: CongeService, private storageService: StorageService) {
  }
  save(): void {
    this.congeService.addCongeandAffectToUser(this.storageService.getUser().id, this.conge).subscribe(
      data => {
        console.log(data);
        this.submitted = true;
        this.conge = {
          dateDebut: new Date(),
          dateFin: new Date(),
          raison: '',

          status: 'encours'
        };
      },
    );
    this.router.navigate(['cngess']);
  }
}
