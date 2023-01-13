import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRightComponent } from './product-right.component';

describe('ProductRightComponent', () => {
  let component: ProductRightComponent;
  let fixture: ComponentFixture<ProductRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
