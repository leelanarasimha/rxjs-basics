import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipOperatorComponent } from './zip-operator.component';

describe('ZipOperatorComponent', () => {
  let component: ZipOperatorComponent;
  let fixture: ComponentFixture<ZipOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
