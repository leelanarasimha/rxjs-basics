import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatOperatorComponent } from './concat-operator.component';

describe('ConcatOperatorComponent', () => {
  let component: ConcatOperatorComponent;
  let fixture: ComponentFixture<ConcatOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
