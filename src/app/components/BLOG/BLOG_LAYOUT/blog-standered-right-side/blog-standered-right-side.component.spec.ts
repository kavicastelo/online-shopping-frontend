import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStanderedRightSideComponent } from './blog-standered-right-side.component';

describe('BlogStanderedRightSideComponent', () => {
  let component: BlogStanderedRightSideComponent;
  let fixture: ComponentFixture<BlogStanderedRightSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogStanderedRightSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogStanderedRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
