import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-habit-list-item',
  templateUrl: './habit-list-item.component.html',
  styleUrls: ['./habit-list-item.component.css']
})
export class HabitListItemComponent implements OnInit {
  @Input()
  habit:any;
  constructor() { }

  ngOnInit(): void {
  }

}
