import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeOperatorComponent } from './merge-operator.component';

describe('MergeOperatorComponent', () => {
  let component: MergeOperatorComponent;
  let fixture: ComponentFixture<MergeOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
