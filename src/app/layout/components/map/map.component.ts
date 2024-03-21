import { Component, OnInit } from '@angular/core';
import { Agency } from 'src/app/class/agency';
import { AgencyService } from 'src/app/services/agency.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

  agency: Agency[] = [];
  province: Agency[] = [];
  seleccion: string = 'Todo';
  seleccionT: string = 'Todo';

  constructor(private agencyService: AgencyService) {}

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
      // console.log(data);
    });
  }

}
