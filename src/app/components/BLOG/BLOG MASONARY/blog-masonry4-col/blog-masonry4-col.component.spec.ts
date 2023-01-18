import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMasonry4ColComponent } from './blog-masonry4-col.component';

describe('BlogMasonry4ColComponent', () => {
  let component: BlogMasonry4ColComponent;
  let fixture: ComponentFixture<BlogMasonry4ColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogMasonry4ColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogMasonry4ColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
