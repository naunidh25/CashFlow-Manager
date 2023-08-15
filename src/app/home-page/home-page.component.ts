import { Component, OnInit } from '@angular/core';
import { Item } from 'src/shared/modals/item.modal';
import { UpdateEvent } from '../item-list/item-list.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  items: Item[] = new Array<Item>();
  totalBudget: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  addItem(newItem: Item) {
    this.items.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: Item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.totalBudget -= item.amount;
  }
  updateItem(updateEvent: UpdateEvent) {
    // result is the update budget item
    // replace the item with the updated/submitted item from the form
    this.items[this.items.indexOf(updateEvent.old)] = updateEvent.new;

    // update the total budget
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }


}
