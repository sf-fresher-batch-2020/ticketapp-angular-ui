import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserticketdetailComponent } from './edituserticketdetail.component';

describe('EdituserticketdetailComponent', () => {
  let component: EdituserticketdetailComponent;
  let fixture: ComponentFixture<EdituserticketdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituserticketdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdituserticketdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
