import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapOperatorComponent } from './switch-map-operator.component';

describe('SwitchMapOperatorComponent', () => {
  let component: SwitchMapOperatorComponent;
  let fixture: ComponentFixture<SwitchMapOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchMapOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchMapOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
