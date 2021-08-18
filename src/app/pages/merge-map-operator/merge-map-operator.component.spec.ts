import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapOperatorComponent } from './merge-map-operator.component';

describe('MergeMapOperatorComponent', () => {
  let component: MergeMapOperatorComponent;
  let fixture: ComponentFixture<MergeMapOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeMapOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeMapOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
