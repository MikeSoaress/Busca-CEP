import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adress } from '../types/adress.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetAdressService {
  private urlApi = environment.urlApi;
  constructor(private httpClient: HttpClient) { }

  getAdress(cep: string): Observable<Adress>
  {
    return this.httpClient.get<Adress>(`${this.urlApi}/${cep}/json/`);
  }
}
