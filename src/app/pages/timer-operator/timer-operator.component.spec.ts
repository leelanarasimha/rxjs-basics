import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerOperatorComponent } from './timer-operator.component';

describe('TimerOperatorComponent', () => {
  let component: TimerOperatorComponent;
  let fixture: ComponentFixture<TimerOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
