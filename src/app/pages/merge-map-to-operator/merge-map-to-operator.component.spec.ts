import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapToOperatorComponent } from './merge-map-to-operator.component';

describe('MergeMapToOperatorComponent', () => {
  let component: MergeMapToOperatorComponent;
  let fixture: ComponentFixture<MergeMapToOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeMapToOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeMapToOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
