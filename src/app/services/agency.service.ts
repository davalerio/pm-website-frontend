import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agency } from '../class/agency';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private http: HttpClient) { }

  getAllAgency() {
    return this.http.get<Agency[]>(
      'https://backend-homepage-pm2-production.up.railway.app/agency'
    );
  }
}
