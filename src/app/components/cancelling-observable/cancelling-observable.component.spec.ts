import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellingObservableComponent } from './cancelling-observable.component';

describe('CancellingObservableComponent', () => {
  let component: CancellingObservableComponent;
  let fixture: ComponentFixture<CancellingObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancellingObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancellingObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
