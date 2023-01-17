import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStanderedLeftSideComponent } from './blog-standered-left-side.component';

describe('BlogStanderedLeftSideComponent', () => {
  let component: BlogStanderedLeftSideComponent;
  let fixture: ComponentFixture<BlogStanderedLeftSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogStanderedLeftSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogStanderedLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
