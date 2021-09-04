import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeOperatorComponent } from './range-operator.component';

describe('RangeOperatorComponent', () => {
  let component: RangeOperatorComponent;
  let fixture: ComponentFixture<RangeOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
