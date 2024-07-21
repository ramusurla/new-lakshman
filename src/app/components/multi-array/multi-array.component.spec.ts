import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiArrayComponent } from './multi-array.component';

describe('MultiArrayComponent', () => {
  let component: MultiArrayComponent;
  let fixture: ComponentFixture<MultiArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiArrayComponent]
    });
    fixture = TestBed.createComponent(MultiArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
