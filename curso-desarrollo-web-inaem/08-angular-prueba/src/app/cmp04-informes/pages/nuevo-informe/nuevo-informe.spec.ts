import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoInforme } from './nuevo-informe';

describe('NuevoInforme', () => {
  let component: NuevoInforme;
  let fixture: ComponentFixture<NuevoInforme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoInforme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoInforme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
