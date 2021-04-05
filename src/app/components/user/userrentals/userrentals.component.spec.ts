import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrentalsComponent } from './userrentals.component';

describe('UserrentalsComponent', () => {
  let component: UserrentalsComponent;
  let fixture: ComponentFixture<UserrentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserrentalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserrentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
