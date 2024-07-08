import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { Chart } from 'chart.js/auto';
import { PowerBIEmbedModule } from "powerbi-client-angular";


import {DepartementService} from "../services/departement.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  embedConfig :any;
  constructor(private departementService: DepartementService, private router: Router) {}

  ngOnInit() {

    /*this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
*/

  }



}
