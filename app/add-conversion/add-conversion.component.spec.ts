import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConversionComponent } from './add-conversion.component';

describe('AddConversionComponent', () => {
  let component: AddConversionComponent;
  let fixture: ComponentFixture<AddConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
