import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserticketdetailComponent } from './userticketdetail.component';

describe('UserticketdetailComponent', () => {
  let component: UserticketdetailComponent;
  let fixture: ComponentFixture<UserticketdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserticketdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserticketdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
