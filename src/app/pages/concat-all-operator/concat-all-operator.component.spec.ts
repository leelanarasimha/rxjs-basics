import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatAllOperatorComponent } from './concat-all-operator.component';

describe('ConcatAllOperatorComponent', () => {
  let component: ConcatAllOperatorComponent;
  let fixture: ComponentFixture<ConcatAllOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatAllOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatAllOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
