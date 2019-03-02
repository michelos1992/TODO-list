import { ItemListService } from './../../services/item-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})

export class ItemFormComponent implements OnInit {

  title: string;
  description: string;

  constructor(public itemListService: ItemListService) { }

  ngOnInit() {
  }

  addItem(idItem: HTMLInputElement, newTitle: HTMLInputElement, newDescription: HTMLInputElement, newId: HTMLInputElement) {
    this.itemListService.addItem({
      id: idItem.valueAsNumber,
      title: newTitle.value,
      description: newDescription.value,
      hide: true,
      checked: false
    });
    newTitle.value = '';
    newDescription.value = '';
    return false;
  }
}
