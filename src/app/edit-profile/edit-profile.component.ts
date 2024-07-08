import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartementService } from '../services/departement.service';
import { PosteService } from '../services/poste.service';
import { Departement } from '../models/departement.model';
import { Poste } from '../models/poste.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  id: any;
  user: any;
  userForm: FormGroup;
  ToShow: Departement[] = [];
  ToShow1: Poste[] = [];
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private fb: FormBuilder,
    private departmentService: DepartementService,
    private posteService: PosteService,
    private storageService: StorageService
  ) {
    this.userForm = this.fb.group({
      cin: [undefined, [Validators.required]],
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      age: [undefined, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      sexe: ['', [Validators.required]],
      departement: [undefined, [Validators.required]],
      poste: [undefined, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.departmentService.getAllDepartements().subscribe(data => {
      this.ToShow = data;
    });
    this.posteService.getAllPostes().subscribe(data => {
      this.ToShow1 = data;
    });
    this.id = this.route.snapshot.params['idUser'];
    this.authService.getUser(this.id).subscribe(data => {
      this.user = data;
      this.userForm.patchValue(this.user);
    });
  }

  saveUser(): void {
    const idUser = this.storageService.getUser().id;
    const formValues = this.userForm.value;

    this.authService.modifyUserProfile(
      idUser,
      formValues.cin,
      formValues.username,
      formValues.nom,
      formValues.prenom,
      formValues.age,
      formValues.sexe,
      this.user.img, // assuming `img` is not part of the form
      formValues.email,

    ).subscribe(
      response => {
        console.log('Profile updated successfully', response);
      },
      error => {
        console.error('Error updating profile', error);
      }
    );
  }
}
