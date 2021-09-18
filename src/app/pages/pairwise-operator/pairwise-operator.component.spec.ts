import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairwiseOperatorComponent } from './pairwise-operator.component';

describe('PairwiseOperatorComponent', () => {
  let component: PairwiseOperatorComponent;
  let fixture: ComponentFixture<PairwiseOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PairwiseOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PairwiseOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
