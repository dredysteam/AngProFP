import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  item: any;

  @Output()
  remove = new EventEmitter<any>();

  toggled = false;

  constructor() { }

  ngOnInit(): void {
  }

  getRoute(item: any)
  {
    return [`../meals`, item.$key];
  }
  removeItem() {
    this.remove.emit(this.item);
  }

  toggle() {
    this.toggled = !this.toggled;
  }

}
