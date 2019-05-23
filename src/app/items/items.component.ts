import { Component, OnInit } from '@angular/core';
import Items from '../../json/products.json';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor( ) { }

  // items: {
  //   id: number, brand: string, name: string, price: number,
  //   compValue: number, rating: any, activeColor: number,
  //   colors: { id: number, displayname: string }
  // }[] = [];

  items: any[] = [Items];


  ngOnInit() {
    console.log(Items);
    
    // console.log(this.items);
    // this.items = this.readJsonService.products;
    // console.log(this.items);
  }

}
