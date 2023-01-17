import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridRightComponent } from './blog-grid-right.component';

describe('BlogGridRightComponent', () => {
  let component: BlogGridRightComponent;
  let fixture: ComponentFixture<BlogGridRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogGridRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGridRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
