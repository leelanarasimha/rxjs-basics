import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeWhileOperatorComponent } from './take-while-operator.component';

describe('TakeWhileOperatorComponent', () => {
  let component: TakeWhileOperatorComponent;
  let fixture: ComponentFixture<TakeWhileOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeWhileOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeWhileOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
