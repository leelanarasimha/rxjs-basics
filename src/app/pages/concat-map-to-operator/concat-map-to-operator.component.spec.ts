import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMapToOperatorComponent } from './concat-map-to-operator.component';

describe('ConcatMapToOperatorComponent', () => {
  let component: ConcatMapToOperatorComponent;
  let fixture: ComponentFixture<ConcatMapToOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatMapToOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatMapToOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
