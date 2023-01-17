import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStanderedFullComponent } from './blog-standered-full.component';

describe('BlogStanderedFullComponent', () => {
  let component: BlogStanderedFullComponent;
  let fixture: ComponentFixture<BlogStanderedFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogStanderedFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogStanderedFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
