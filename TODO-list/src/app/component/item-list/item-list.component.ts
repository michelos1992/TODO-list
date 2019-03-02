import { ItemElement } from 'src/app/model/items';
import { Component, OnInit, Input } from '@angular/core';
import { ItemListService } from 'src/app/services/item-list.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {

  @Input() item: ItemElement;
  items: ItemElement[];

  marked = false;
  theCheckbox = false;

  constructor(public itemListService: ItemListService) {}

  ngOnInit() {
    this.items = this.itemListService.getItems();
  }

  addItem(item: ItemElement) {
    console.log(item);
    this.itemListService.addItem(item);
  }

  deleteItem(item: ItemElement) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.itemListService.deleteItem(item);
    }
  }

  onCheckboxChange(option, event) {
    if (event.target.checked) {
      for (let i = 0 ; i < this.items.length; i++) {
        if (this.items[i] === option.id) {
          this.items[i].checked = event.target.checked;
        }
      }
    }
  }
}
