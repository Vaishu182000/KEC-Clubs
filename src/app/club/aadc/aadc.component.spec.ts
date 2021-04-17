import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadcComponent } from './aadc.component';

describe('AadcComponent', () => {
  let component: AadcComponent;
  let fixture: ComponentFixture<AadcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AadcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AadcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
