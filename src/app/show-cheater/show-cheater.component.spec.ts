import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCheaterComponent } from './show-cheater.component';

describe('ShowCheaterComponent', () => {
  let component: ShowCheaterComponent;
  let fixture: ComponentFixture<ShowCheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCheaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
