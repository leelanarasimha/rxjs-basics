import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferCountOperatorComponent } from './buffer-count-operator.component';

describe('BufferCountOperatorComponent', () => {
  let component: BufferCountOperatorComponent;
  let fixture: ComponentFixture<BufferCountOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BufferCountOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferCountOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
