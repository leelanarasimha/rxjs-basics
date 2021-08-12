import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstOperatorComponent } from './first-operator.component';

describe('FirstOperatorComponent', () => {
  let component: FirstOperatorComponent;
  let fixture: ComponentFixture<FirstOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
