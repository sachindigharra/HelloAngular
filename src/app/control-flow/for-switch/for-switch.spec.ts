import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSwitch } from './for-switch';

describe('ForSwitch', () => {
  let component: ForSwitch;
  let fixture: ComponentFixture<ForSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
