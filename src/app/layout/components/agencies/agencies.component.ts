import { Component, OnInit } from '@angular/core';
import { Agency } from 'src/app/class/agency';
import { AgencyService } from 'src/app/services/agency.service';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.scss']
})
export class AgenciesComponent implements OnInit {
  agency: Agency[] = [];
  province: Agency[] = [];
  seleccion: string = 'All';
  seleccionT: string = 'All';

  constructor(private agencyService: AgencyService) { }

  listAgency() {
    let agencyMap: any = this.agency.map((item) => {
      return [item.name, item];
    });

    var agencyMapArray = new Map(agencyMap);
    let unique: any = [...agencyMapArray.values()];
    this.province = unique;
  }

  ngOnInit(): void {
    this.agencyService.getAllAgency().subscribe((data) => {
      this.agency = data;
      this.listAgency();
    })
  }
}
