import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp04Informes } from './cmp04-informes';

describe('Cmp04Informes', () => {
  let component: Cmp04Informes;
  let fixture: ComponentFixture<Cmp04Informes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp04Informes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp04Informes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
