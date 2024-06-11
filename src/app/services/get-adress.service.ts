import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adress } from '../types/adress.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetAdressService {
  urlApi = environment.urlApi;
  constructor(private httpClient: HttpClient) { }


  getAdress(cep: string): Observable<Adress>
  {
    this.urlApi = `/${this.urlApi}/${cep}/json/`;
    return this.httpClient.get<Adress>(this.urlApi);
  }
}
