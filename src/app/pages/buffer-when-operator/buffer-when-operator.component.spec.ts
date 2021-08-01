import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferWhenOperatorComponent } from './buffer-when-operator.component';

describe('BufferWhenOperatorComponent', () => {
  let component: BufferWhenOperatorComponent;
  let fixture: ComponentFixture<BufferWhenOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BufferWhenOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferWhenOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
