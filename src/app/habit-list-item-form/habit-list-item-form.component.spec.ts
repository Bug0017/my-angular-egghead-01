import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitListItemFormComponent } from './habit-list-item-form.component';

describe('HabitListItemFormComponent', () => {
  let component: HabitListItemFormComponent;
  let fixture: ComponentFixture<HabitListItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitListItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitListItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
