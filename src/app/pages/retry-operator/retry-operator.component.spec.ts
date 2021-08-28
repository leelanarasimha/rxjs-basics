import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryOperatorComponent } from './retry-operator.component';

describe('RetryOperatorComponent', () => {
  let component: RetryOperatorComponent;
  let fixture: ComponentFixture<RetryOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetryOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetryOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
