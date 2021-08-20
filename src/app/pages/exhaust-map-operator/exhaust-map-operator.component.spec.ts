import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhaustMapOperatorComponent } from './exhaust-map-operator.component';

describe('ExhaustMapOperatorComponent', () => {
  let component: ExhaustMapOperatorComponent;
  let fixture: ComponentFixture<ExhaustMapOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhaustMapOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhaustMapOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
