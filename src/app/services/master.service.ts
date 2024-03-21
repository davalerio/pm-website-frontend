import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Firestore, collectionData, collection, query, orderBy } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExchangeRateModel } from '../_models/exchange-rate.models';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(
    private firestore: Firestore,
    private http: HttpClient,
  ) { }

  getExchangeRate(): Observable<ExchangeRateModel> {
    const ref = collection(this.firestore, 'exchange_rate');
    const q = query(ref, orderBy('created_at', 'desc'));
    return collectionData(q)
      .pipe(
        map(docs => {
          let data = docs.length > 0 ? docs[0] : null
          return new ExchangeRateModel(data)
        })
      )
  }

}
