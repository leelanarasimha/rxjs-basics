import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinOperatorComponent } from './min-operator.component';

describe('MinOperatorComponent', () => {
  let component: MinOperatorComponent;
  let fixture: ComponentFixture<MinOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
