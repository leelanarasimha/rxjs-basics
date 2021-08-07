import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctOperatorComponent } from './distinct-operator.component';

describe('DistinctOperatorComponent', () => {
  let component: DistinctOperatorComponent;
  let fixture: ComponentFixture<DistinctOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistinctOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistinctOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
