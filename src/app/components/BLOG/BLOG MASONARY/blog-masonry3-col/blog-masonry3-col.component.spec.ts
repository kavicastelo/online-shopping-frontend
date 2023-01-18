import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMasonry3ColComponent } from './blog-masonry3-col.component';

describe('BlogMasonry3ColComponent', () => {
  let component: BlogMasonry3ColComponent;
  let fixture: ComponentFixture<BlogMasonry3ColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogMasonry3ColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogMasonry3ColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
