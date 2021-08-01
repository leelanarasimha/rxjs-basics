import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeUntilOperatorComponent } from './take-until-operator.component';

describe('TakeUntilOperatorComponent', () => {
  let component: TakeUntilOperatorComponent;
  let fixture: ComponentFixture<TakeUntilOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeUntilOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeUntilOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
