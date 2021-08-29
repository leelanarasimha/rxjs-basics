import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkJoinOperatorComponent } from './fork-join-operator.component';

describe('ForkJoinOperatorComponent', () => {
  let component: ForkJoinOperatorComponent;
  let fixture: ComponentFixture<ForkJoinOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForkJoinOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkJoinOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
