import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveryOperatorComponent } from './every-operator.component';

describe('EveryOperatorComponent', () => {
  let component: EveryOperatorComponent;
  let fixture: ComponentFixture<EveryOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveryOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveryOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
