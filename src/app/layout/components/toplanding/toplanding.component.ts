import { Component, OnInit } from '@angular/core';
import { Agency } from 'src/app/class/agency';
import { AgencyService } from 'src/app/services/agency.service';

@Component({
  selector: 'app-toplanding',
  templateUrl: './toplanding.component.html',
  styleUrls: ['./toplanding.component.scss']
})
export class ToplandingComponent implements OnInit {

  agency: Agency[] = [];

  constructor(private agencyService : AgencyService) {

  }

  ngOnInit(): void {
    this.agencyService.getAllAgency().subscribe((data) => {
      this.agency = data;
    })
  }


}
