import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaccine } from '../common/vaccine';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  private baseUrl = 'http://localhost:8080/vaccines';

  constructor(private httpClient: HttpClient) { }

  getVaccineList(): Observable<Vaccine[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response.dataOutput.vaccines)
    )
  }
}


interface GetResponse{
  dataOutput: {
    vaccines: Vaccine[];
  }
}
