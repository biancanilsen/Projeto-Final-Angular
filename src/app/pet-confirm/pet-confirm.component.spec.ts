import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetConfirmComponent } from './pet-confirm.component';

describe('PetConfirmComponent', () => {
  let component: PetConfirmComponent;
  let fixture: ComponentFixture<PetConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
