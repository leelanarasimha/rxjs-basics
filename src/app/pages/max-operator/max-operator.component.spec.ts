import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxOperatorComponent } from './max-operator.component';

describe('MaxOperatorComponent', () => {
  let component: MaxOperatorComponent;
  let fixture: ComponentFixture<MaxOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
