import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartementService } from '../services/departement.service';
import { Annonce } from '../models/annonce.model';
import { AnnonceService } from '../services/annonce.service';
import {Departement} from "../models/departement.model";

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
  selectedDepartmentId: number | null = null;

  annonce: Annonce = {
    dateAnnonce: new Date(),
    motif: '',
    titre: '',
    image: ''
  };

  submitted = false;
  ToShow: Departement[] = [];
  errorMessage: string | null = null;

  constructor(
    private router: Router,
    private departmentService: DepartementService,
    private annonceService: AnnonceService
  ) {}

  ngOnInit(): void {
    this.departmentService.getAllDepartements().subscribe(
      (data) => {
        this.ToShow = data;
      },
      (error) => {
        this.errorMessage = 'Erreur lors du chargement des départements';
        console.error(error);
      }
    );
  }

  onFileChange(event: any): void {
    const file = event?.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (this.annonce) {
          this.annonce.image = '/assets/' + file.name;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  save(): void {
    if (!this.selectedDepartmentId) {
      this.errorMessage = 'Veuillez sélectionner un département';
      return;
    }

    if (!this.annonce.titre || !this.annonce.motif) {
      this.errorMessage = 'Veuillez remplir tous les champs requis';
      return;
    }

    this.annonceService.addCongeandAffectToDepartement(this.selectedDepartmentId, this.annonce).subscribe(
      (data) => {
        console.log(this.annonce);
        this.submitted = true;
        this.annonce = {
          dateAnnonce: new Date(),
          motif: '',
          titre: '',
          image: ''
        };
        this.router.navigate(['annonces'])
      },
      (error) => {
        this.errorMessage = 'Erreur lors de l\'ajout de l\'annonce. Veuillez réessayer.';
        console.error('Erreur lors de l\'ajout de l\'annonce', error);
      }
    );
  }
}
