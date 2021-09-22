import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDropdownComponent } from './btn-dropdown.component';

describe('BtnDropdownComponent', () => {
  let component: BtnDropdownComponent;
  let fixture: ComponentFixture<BtnDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
