import { HabitService } from './../habit.service';
import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Habit } from '../habit';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css'],
})
export class HabitListComponent implements OnInit {
  habits: Observable<Habit[]> | undefined ;
  constructor(private habitService: HabitService) {}

  ngOnInit(): void {
    this.habits = this.habitService.getHabits().pipe(map((habits)=>{
      return habits.map((habit)=>{
        habit.streak = habit.count > 5 ? true : false
        return habit;
      })
    }));

this.habitService.getUser().subscribe((users)=>{
      console.log(users)
    })
  }

  onAddHabit(newHabit:any){
    this.habitService.addHabit(newHabit)
  };
}
