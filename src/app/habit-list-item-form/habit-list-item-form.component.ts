import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-habit-list-item-form',
  templateUrl: './habit-list-item-form.component.html',
  styleUrls: ['./habit-list-item-form.component.css'],
})
export class HabitListItemFormComponent implements OnInit {
  habitForm: any;
  @Output() addHabit =  new EventEmitter();
  constructor(private formBuilder: FormBuilder) {
    this.habitForm = this.formBuilder.group({
      title: '',
    });
  }
  ngOnInit(): void {}
  onSubmit(newHabit: any) {
    this.addHabit.emit(newHabit)
    this.habitForm.reset();
  }
}
