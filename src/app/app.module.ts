import { HabitService } from './habit.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { HabitDetailComponent } from './habit-detail/habit-detail.component';
import { HabitListItemComponent } from './habit-list-item/habit-list-item.component';
import { HabitListItemFormComponent } from './habit-list-item-form/habit-list-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HabitListComponent,
    HabitDetailComponent,
    HabitListItemComponent,
    HabitListItemFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
     HttpClientModule
  ],
  providers: [HabitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
