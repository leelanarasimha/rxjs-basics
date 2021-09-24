import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatComponentComponent } from './concat-component.component';

describe('ConcatComponentComponent', () => {
  let component: ConcatComponentComponent;
  let fixture: ComponentFixture<ConcatComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
