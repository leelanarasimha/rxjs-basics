import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionObservableComponent } from './function-observable.component';

describe('FunctionObservableComponent', () => {
  let component: FunctionObservableComponent;
  let fixture: ComponentFixture<FunctionObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
