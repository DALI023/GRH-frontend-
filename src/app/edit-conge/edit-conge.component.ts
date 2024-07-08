import {Component, OnInit} from '@angular/core';
import {CongeService} from "../services/conge.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-conge',
  templateUrl: './edit-conge.component.html',
  styleUrl: './edit-conge.component.css'
})
export class EditCongeComponent  implements OnInit {
  id: any;
  conge: any;




  constructor(private congeService: CongeService, private router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idConge'];
    this.congeService.getConge(this.id).subscribe(
      data => {
        this.conge  =data;

      }
    )
  }

  update(): void {
      this.congeService.modifyConge(this.conge).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/conges']);
        },
        error => {
          console.log(error);
        });

  }

}
