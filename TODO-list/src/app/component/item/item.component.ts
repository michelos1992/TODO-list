import { ItemListService } from './../../services/item-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { ItemElement } from 'src/app/model/items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  @Input() item: ItemElement;
  items: ItemElement[];
  marked = false;
  theCheckbox = false;

  constructor(public itemListService: ItemListService) { }

  ngOnInit() {
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
