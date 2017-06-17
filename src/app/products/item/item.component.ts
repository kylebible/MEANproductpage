import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpService } from "app/http.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item;
  @Input() index; 
  items = [];

	constructor(private _httpService: HttpService) {
		_httpService.observedItems.subscribe(
			(updatedItems) => {  this.items = updatedItems; },
			(err) => { console.log('error')},
			() => { }
		)
	}

  ngOnInit() {
  }

  deleteItem() {
    this.items.splice(this.index,1)
  }

}
