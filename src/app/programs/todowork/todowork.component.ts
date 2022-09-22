import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todowork',
  templateUrl: './todowork.component.html',
  styleUrls: ['./todowork.component.scss']
})
export class TodoworkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }
  addItem(description : string) {
    //unshift是加到最前面，push是加到最後面
    this.allItems.unshift({
      description,
      done: false
    });
  }
  remove(item : any) {
    console.log(item);
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
