import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedropdownComponent } from './timedropdown.component';

describe('TimedropdownComponent', () => {
  let component: TimedropdownComponent;
  let fixture: ComponentFixture<TimedropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimedropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimedropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
