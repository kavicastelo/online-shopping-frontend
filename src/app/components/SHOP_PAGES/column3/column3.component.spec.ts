import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Column3Component } from './column3.component';

describe('Column3Component', () => {
  let component: Column3Component;
  let fixture: ComponentFixture<Column3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Column3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Column3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
