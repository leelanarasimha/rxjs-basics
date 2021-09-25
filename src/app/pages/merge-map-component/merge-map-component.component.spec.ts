import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapComponentComponent } from './merge-map-component.component';

describe('MergeMapComponentComponent', () => {
  let component: MergeMapComponentComponent;
  let fixture: ComponentFixture<MergeMapComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeMapComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeMapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
