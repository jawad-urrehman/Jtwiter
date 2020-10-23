import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwetComponent } from './twet.component';

describe('TwetComponent', () => {
  let component: TwetComponent;
  let fixture: ComponentFixture<TwetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
