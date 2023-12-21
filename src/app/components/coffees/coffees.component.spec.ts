import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeesComponent } from './coffees.component';

describe('CoffeesComponent', () => {
  let component: CoffeesComponent;
  let fixture: ComponentFixture<CoffeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
