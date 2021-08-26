import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishLastOperatorComponent } from './publish-last-operator.component';

describe('PublishLastOperatorComponent', () => {
  let component: PublishLastOperatorComponent;
  let fixture: ComponentFixture<PublishLastOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishLastOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishLastOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
