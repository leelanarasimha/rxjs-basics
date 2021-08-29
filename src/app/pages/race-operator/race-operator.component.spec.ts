import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceOperatorComponent } from './race-operator.component';

describe('RaceOperatorComponent', () => {
  let component: RaceOperatorComponent;
  let fixture: ComponentFixture<RaceOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
