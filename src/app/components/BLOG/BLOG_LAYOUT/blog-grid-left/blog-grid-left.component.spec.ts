import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridLeftComponent } from './blog-grid-left.component';

describe('BlogGridLeftComponent', () => {
  let component: BlogGridLeftComponent;
  let fixture: ComponentFixture<BlogGridLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogGridLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGridLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
