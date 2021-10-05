import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptPageComponent } from './adopt-page.component';

describe('AdoptPageComponent', () => {
  let component: AdoptPageComponent;
  let fixture: ComponentFixture<AdoptPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
