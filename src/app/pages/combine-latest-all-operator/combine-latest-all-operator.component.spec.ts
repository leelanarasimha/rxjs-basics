import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestAllOperatorComponent } from './combine-latest-all-operator.component';

describe('CombineLatestAllOperatorComponent', () => {
  let component: CombineLatestAllOperatorComponent;
  let fixture: ComponentFixture<CombineLatestAllOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineLatestAllOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineLatestAllOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
