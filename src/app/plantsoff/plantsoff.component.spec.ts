import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsoffComponent } from './plantsoff.component';

describe('PlantsoffComponent', () => {
  let component: PlantsoffComponent;
  let fixture: ComponentFixture<PlantsoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantsoffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantsoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
