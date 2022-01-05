import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habit } from './habit';
@Injectable({
  providedIn: 'root',
})
export class HabitService {
  habits: Habit[] = [
    { id: 1, title: 'Brushing twice a day. Dental hygiene is very important', count:5, },
    { id: 2, title: 'Bathing every day', count:5, },
    { id: 3, title: 'Eat breakfast', count:7, },
    { id: 4, title: 'Hand wash', count:5, },
    { id: 5, title: 'Drink water, not soda', count:5, },
  ];
  constructor(private http: HttpClient) {}


  getHabits(): Observable<Habit[]>{
    return of(this.habits)
  }

  addHabit(newHabit: any) {
    newHabit.id = this.habits.length + 1;
    this.habits.push(newHabit);
  }

  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
