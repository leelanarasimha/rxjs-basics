import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountOperatorComponent } from './count-operator.component';

describe('CountOperatorComponent', () => {
  let component: CountOperatorComponent;
  let fixture: ComponentFixture<CountOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
