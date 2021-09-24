import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeComponentComponent } from './merge-component.component';

describe('MergeComponentComponent', () => {
  let component: MergeComponentComponent;
  let fixture: ComponentFixture<MergeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
