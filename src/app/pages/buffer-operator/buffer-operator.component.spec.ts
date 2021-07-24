import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferOperatorComponent } from './buffer-operator.component';

describe('BufferOperatorComponent', () => {
  let component: BufferOperatorComponent;
  let fixture: ComponentFixture<BufferOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BufferOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
