import { Component } from '@angular/core';
import { HttpService } from "app/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    items = [
      {title: "Camera", price:"2000.00", url:"https://www.bhphotovideo.com/images/images2000x2000/canon_eos_5d_mark_iv_1274706.jpg"},
      {title: "Bike", price:"5.00", url:"http://www.publicbikes.com/site/images/items/53111_bike_Peach_010-PUBLIC-C7-7-Speed-Stepthrough-Dutch-Bike.jpg?resizeid=5&resizeh=0&resizew=1800"},
      {title: "Can", price:"1.00", url:"http://img.clipartall.com/can-clipart-tumundografico-can-clipart-2323_2400.png"},
      {title: "Dongle", price:"5000.00", url:"http://cdn.cultofmac.com/wp-content/uploads/2016/10/C_hub_Apple001-e1478281278369.jpg"},
      {title: "Colin", price:"0.00", url:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4NzM5NDk0MV5BMl5BanBnXkFtZTcwNzAzMTUxNw@@._V1_UY317_CR3,0,214,317_AL_.jpg"},
    ]
    constructor(private _httpService: HttpService) {
    _httpService.updateItems(this.items)
  }
  updateUsers(){
    this._httpService.updateItems(this.items);
  }



}
