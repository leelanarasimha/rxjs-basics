import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAtOperatorComponent } from './element-at-operator.component';

describe('ElementAtOperatorComponent', () => {
  let component: ElementAtOperatorComponent;
  let fixture: ComponentFixture<ElementAtOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementAtOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementAtOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
