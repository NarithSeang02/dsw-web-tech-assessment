import { Component, OnInit, Input } from '@angular/core';
import Items from '../../json/products.json';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  items: any[] = [Items];

  @Input() item: any;


  ngOnInit() {
  }

}
