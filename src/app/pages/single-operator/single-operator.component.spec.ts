import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOperatorComponent } from './single-operator.component';

describe('SingleOperatorComponent', () => {
  let component: SingleOperatorComponent;
  let fixture: ComponentFixture<SingleOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
