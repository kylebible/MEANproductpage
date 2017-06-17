import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/http.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  items = [];
	constructor(private _httpService: HttpService) {
		_httpService.observedItems.subscribe(
			(updatedItems) => {  this.items = updatedItems; },
			(err) => { console.log('errors!!!')},
			() => { }
		)
	}
  ngOnInit(): void {
    
  }

}
