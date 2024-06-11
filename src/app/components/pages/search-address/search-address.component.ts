import { Component, OnInit } from '@angular/core';
import { Adress } from 'src/app/types/adress.interface';
import { GetAdressService } from 'src/app/services/get-adress.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-address',
  templateUrl: './search-address.component.html',
  styleUrls: ['./search-address.component.css']
})

export class SearchAddressComponent implements OnInit {
  form!: FormGroup;
  adress!: Adress;
  exibirLayerCarregamento: boolean = false;
  formSubmitted!: boolean;
  cepEncontrado: Boolean | null = null;

  constructor(private getAdress: GetAdressService, private fb: FormBuilder) {
    this.form = this.fb.group({
      cep: ['', [Validators.required, Validators.maxLength(8),Validators.minLength(8)]]
    })
   }

  ngOnInit(): void {

  }

  get cep()
  {
    return this.form.get('cep');
  }
  
  searchAddress()
  {
    this.formSubmitted = true;

    console.log(this.cepEncontrado);
    if(this.form.valid)
      {

        this.exibirLayerCarregamento = true;
        this.getAdress.getAdress(this.form.get('cep')!.value).subscribe(data => 
          {
            this.adress = data;
            this.exibirLayerCarregamento = false;

            if(this.adress.localidade != undefined)
                this.cepEncontrado = true;

            else
            this.cepEncontrado = false;

          });
      }
  }
}
