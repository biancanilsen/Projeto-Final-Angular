import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetconfirmComponent } from './petconfirm.component';

describe('PetconfirmComponent', () => {
  let component: PetconfirmComponent;
  let fixture: ComponentFixture<PetconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetconfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
