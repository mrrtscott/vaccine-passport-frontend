import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Traveller } from '../common/traveller';

@Injectable({
  providedIn: 'root'
})
export class TravellerService {

 

  private baseUrl = 'http://localhost:8080/travellers';


  constructor(private httpClient: HttpClient) { 
    
  }


  getTravellerList(currentPassportNumber: string): Observable<Traveller[]> {
    const searchUrl = `${this.baseUrl}/passport?passportNumber=${currentPassportNumber}`


    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response.dataOutput.traveller)
    )
  }
  

 
}

interface GetResponse{
  dataOutput: {
    traveller: Traveller[];
  }

}
