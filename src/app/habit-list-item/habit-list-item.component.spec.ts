import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitListItemComponent } from './habit-list-item.component';

describe('HabitListItemComponent', () => {
  let component: HabitListItemComponent;
  let fixture: ComponentFixture<HabitListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
