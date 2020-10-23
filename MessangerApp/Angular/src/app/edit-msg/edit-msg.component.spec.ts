import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMsgComponent } from './edit-msg.component';

describe('EditMsgComponent', () => {
  let component: EditMsgComponent;
  let fixture: ComponentFixture<EditMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
