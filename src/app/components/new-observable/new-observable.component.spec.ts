import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewObservableComponent } from './new-observable.component';

describe('NewObservableComponent', () => {
  let component: NewObservableComponent;
  let fixture: ComponentFixture<NewObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
