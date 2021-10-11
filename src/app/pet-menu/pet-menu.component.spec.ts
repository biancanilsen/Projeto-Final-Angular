import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetMenuComponent } from './pet-menu.component';

describe('PetMenuComponent', () => {
  let component: PetMenuComponent;
  let fixture: ComponentFixture<PetMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
