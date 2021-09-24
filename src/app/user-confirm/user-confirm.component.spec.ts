import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfirmComponent } from './user-confirm.component';

describe('UserConfirmComponent', () => {
  let component: UserConfirmComponent;
  let fixture: ComponentFixture<UserConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
