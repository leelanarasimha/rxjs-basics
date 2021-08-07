import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctUntilKeyChangedComponent } from './distinct-until-key-changed.component';

describe('DistinctUntilKeyChangedComponent', () => {
  let component: DistinctUntilKeyChangedComponent;
  let fixture: ComponentFixture<DistinctUntilKeyChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistinctUntilKeyChangedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistinctUntilKeyChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
