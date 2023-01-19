import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSingleDefaultComponent } from './blog-single-default.component';

describe('BlogSingleDefaultComponent', () => {
  let component: BlogSingleDefaultComponent;
  let fixture: ComponentFixture<BlogSingleDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSingleDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSingleDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
