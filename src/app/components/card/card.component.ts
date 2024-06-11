import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Adress } from 'src/app/types/adress.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 @Input() adress!:Adress;
  constructor() { }

  ngOnInit(): void {
  }

}
