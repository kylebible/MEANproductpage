import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/http.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  items = [];
  item: object;

	constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
		_httpService.observedItems.subscribe(
			(updatedItems) => {  this.items = updatedItems; },
			(err) => { console.log('error')},
			() => { }
		)
    this._route.params.subscribe((param)=>{
      console.log("TaskDetailsComponent loaded and url id given is: ", param.id);
      this.item = this.items[param.id]
    })
	}

  editItem() {
    this._httpService.updateItems(this.items)
    this._router.navigate(['/products'])
  }

  ngOnInit() {
  }

}
