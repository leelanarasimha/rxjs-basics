import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapToOperatorComponent } from './switch-map-to-operator.component';

describe('SwitchMapToOperatorComponent', () => {
  let component: SwitchMapToOperatorComponent;
  let fixture: ComponentFixture<SwitchMapToOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchMapToOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchMapToOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
