import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferToggleOperatorComponent } from './buffer-toggle-operator.component';

describe('BufferToggleOperatorComponent', () => {
  let component: BufferToggleOperatorComponent;
  let fixture: ComponentFixture<BufferToggleOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BufferToggleOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferToggleOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
