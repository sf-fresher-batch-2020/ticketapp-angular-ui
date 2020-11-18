import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditticketdetailComponent } from './editticketdetail.component';

describe('EditticketdetailComponent', () => {
  let component: EditticketdetailComponent;
  let fixture: ComponentFixture<EditticketdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditticketdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditticketdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
