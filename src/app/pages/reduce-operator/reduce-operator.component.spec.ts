import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduceOperatorComponent } from './reduce-operator.component';

describe('ReduceOperatorComponent', () => {
  let component: ReduceOperatorComponent;
  let fixture: ComponentFixture<ReduceOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReduceOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduceOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
