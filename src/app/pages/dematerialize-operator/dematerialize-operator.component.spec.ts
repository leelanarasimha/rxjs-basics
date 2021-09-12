import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DematerializeOperatorComponent } from './dematerialize-operator.component';

describe('DematerializeOperatorComponent', () => {
  let component: DematerializeOperatorComponent;
  let fixture: ComponentFixture<DematerializeOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DematerializeOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DematerializeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
