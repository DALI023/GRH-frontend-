// add-user.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DepartementService } from '../../services/departement.service';
import { PosteService } from '../../services/poste.service';
import { Departement } from '../../models/departement.model';
import { Poste } from '../../models/poste.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  ToShow: Departement[] = [];
  ToShow1: Poste[] = [];
  userForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private departmentService: DepartementService,
    private posteService: PosteService,
    private fb: FormBuilder
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
    this.departmentService.getAllDepartements().subscribe(
      (data) => {
        this.ToShow = data;
      }
    );
    this.posteService.getAllPostes().subscribe(
      (data) => {
        this.ToShow1 = data;
      }
    );
  }

  saveUser(): void {
    if (this.userForm.valid) {
      const formValue = this.userForm.value;
      this.authService.register(
        formValue.cin,
        formValue.username,
        formValue.nom,
        formValue.prenom,
        formValue.age,
        formValue.sexe,
        'assets/default.png',
        formValue.email,
        formValue.password,
        formValue.poste,
        formValue.departement
      ).subscribe(response => {
        console.log('User added successfully', response);
        this.router.navigate(['listEmployee']);
      }, error => {
        console.error('Error adding user', error);
      });
    }
  }
}
