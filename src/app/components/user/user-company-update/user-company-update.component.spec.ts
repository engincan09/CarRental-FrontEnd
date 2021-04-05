import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompanyUpdateComponent } from './user-company-update.component';

describe('UserCompanyUpdateComponent', () => {
  let component: UserCompanyUpdateComponent;
  let fixture: ComponentFixture<UserCompanyUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCompanyUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompanyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
