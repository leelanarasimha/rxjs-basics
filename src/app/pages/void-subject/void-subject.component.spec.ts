import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidSubjectComponent } from './void-subject.component';

describe('VoidSubjectComponent', () => {
  let component: VoidSubjectComponent;
  let fixture: ComponentFixture<VoidSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoidSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoidSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
