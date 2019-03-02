import { ItemElement } from './../model/items';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  items: ItemElement[];

  constructor() {
    // this.tasks = [
    //   {title: 'Create a Website', description: 'Create a wordpress website', hide: true},
    //   {title: 'write a document', description: 'Do other stuff', hide: true}
    // ];
  }

  getItems() {
    if(localStorage.getItem('items') === null) {
      this.items = [];
    } else {
      this.items = JSON.parse(localStorage.getItem('items'));
    }
    return this.items;
  }

  addItem(item: ItemElement) {
    this.items.push(item);
    let items = [];
    if (localStorage.getItem('items') === null) {
      items = [];
      items.push(item);
      localStorage.setItem('items', JSON.stringify(items));
    } else {
      items = JSON.parse(localStorage.getItem('items'));
      items.push(item);
      localStorage.setItem('items', JSON.stringify(items));
    }
  }

  deleteItem(item: ItemElement) {
    for (let i = 0; i < this.items.length; i++) {
      if (item == this.items[i]) {
        this.items.splice(i, 1);
        localStorage.setItem('items', JSON.stringify(this.items));
      }
    }
  }
}
