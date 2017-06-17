import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()


export class HttpService {
  observedItems = new BehaviorSubject(null)
  
  updateItems(items: Array<object>) {
    this.observedItems.next(items)
  }
  constructor() {
   }

}
