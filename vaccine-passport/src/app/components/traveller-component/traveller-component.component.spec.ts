import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerComponentComponent } from './traveller-component.component';

describe('TravellerComponentComponent', () => {
  let component: TravellerComponentComponent;
  let fixture: ComponentFixture<TravellerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravellerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
