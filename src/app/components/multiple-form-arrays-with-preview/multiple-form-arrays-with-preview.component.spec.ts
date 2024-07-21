import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleFormArraysWithPreviewComponent } from './multiple-form-arrays-with-preview.component';

describe('MultipleFormArraysWithPreviewComponent', () => {
  let component: MultipleFormArraysWithPreviewComponent;
  let fixture: ComponentFixture<MultipleFormArraysWithPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleFormArraysWithPreviewComponent]
    });
    fixture = TestBed.createComponent(MultipleFormArraysWithPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
