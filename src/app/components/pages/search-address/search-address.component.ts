import { Component, OnInit } from '@angular/core';
import { Adress } from 'src/app/types/adress.interface';
import { GetAdressService } from 'src/app/services/get-adress.service';


@Component({
  selector: 'app-search-address',
  templateUrl: './search-address.component.html',
  styleUrls: ['./search-address.component.css']
})
export class SearchAddressComponent implements OnInit {
  adress! : Adress;
  txtCep! : string

  constructor(private getAdress: GetAdressService) { }

  ngOnInit(): void {

  }

  
  searchAddress()
  {
    this.getAdress.getAdress(this.txtCep).subscribe(data => 
      {
        this.adress = data;
        console.log(this.adress);
      })
  }
}
