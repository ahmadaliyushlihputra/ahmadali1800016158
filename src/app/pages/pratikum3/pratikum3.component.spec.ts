import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pratikum3Component } from './pratikum3.component';

describe('Pratikum3Component', () => {
  let component: Pratikum3Component;
  let fixture: ComponentFixture<Pratikum3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pratikum3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pratikum3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
