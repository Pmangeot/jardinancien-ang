import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLoginConnexionComponent } from './modal-login-connexion.component';

describe('ModalLoginConnexionComponent', () => {
  let component: ModalLoginConnexionComponent;
  let fixture: ComponentFixture<ModalLoginConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalLoginConnexionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLoginConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
