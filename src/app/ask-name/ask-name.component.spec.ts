import { ComponentFixture, TestBed } from '@angular/core/testing';

import { askNameComponent } from './ask-name.component';

describe('askNameComponent', () => {
  let component: askNameComponent;
  let fixture: ComponentFixture<askNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ askNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(askNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
