import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import sample from '../json/sample.json'
import Items from '../json/products.json';

@Injectable({
  providedIn: 'root'
})
export class ReadJSONService {
  constructor() { 
    // console.log(sample);
    // this.getJSON().subscribe(data => {
    //   console.log(data);
    // });
    console.log(Items);
  }
//   products: {
//     id: number, brand: string, name: string, price: number,
//       compValue: number, rating: any, activeColor: number,
//         colors: { id: number, displayname: string }
// } [] = [];

  productsUrl: string = '../json/products.json';
  // items: {id: number, brand: string, name: string, price: number,
  //    compValue: number, rating: any,activeColor: number,
  //    colors:{id: number, displayname: string}}[] = [];

  // getJSON(){
  //   return this.http.get(this.productsUrl);
  // }
}
