import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutDeleteApi } from './put-delete-api';

describe('PutDeleteApi', () => {
  let component: PutDeleteApi;
  let fixture: ComponentFixture<PutDeleteApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutDeleteApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutDeleteApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
