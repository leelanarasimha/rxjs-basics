import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubjectComponent } from './behavior-subject.component';

describe('BehaviorSubjectComponent', () => {
  let component: BehaviorSubjectComponent;
  let fixture: ComponentFixture<BehaviorSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviorSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
