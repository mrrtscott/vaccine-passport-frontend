import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vaccine } from 'src/app/common/vaccine';
import { VaccineService } from 'src/app/services/vaccine.service';

@Component({
  selector: 'app-vaccine-list',
  templateUrl: './vaccine-list.component.html',
  styleUrls: ['./vaccine-list.component.css']
})
export class VaccineListComponent implements OnInit {

  vaccine: Vaccine[] = [];

  constructor(private vaccineService: VaccineService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listVaccine();
  }

  listVaccine(){
    this.vaccineService.getVaccineList().subscribe(
      data => {
        this.vaccine = data;
      }
    )
  }
}
