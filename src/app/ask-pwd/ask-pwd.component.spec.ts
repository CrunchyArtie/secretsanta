import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskPwdComponent } from './ask-pwd.component';

describe('AskPwdComponent', () => {
  let component: AskPwdComponent;
  let fixture: ComponentFixture<AskPwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskPwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
