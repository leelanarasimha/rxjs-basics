import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindIndexOperatorComponent } from './find-index-operator.component';

describe('FindIndexOperatorComponent', () => {
  let component: FindIndexOperatorComponent;
  let fixture: ComponentFixture<FindIndexOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindIndexOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindIndexOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
