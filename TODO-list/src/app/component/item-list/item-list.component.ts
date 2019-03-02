import { ItemElement } from 'src/app/model/items';
import { Component, OnInit } from '@angular/core';
import { ItemListService } from 'src/app/services/item-list.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {

  items: ItemElement[];

  constructor(public itemListService: ItemListService) {}

  ngOnInit() {
    this.items = this.itemListService.getItems();
  }

  addItem(item: ItemElement) {
    console.log(item);
    this.itemListService.addItem(item);
  }

}
