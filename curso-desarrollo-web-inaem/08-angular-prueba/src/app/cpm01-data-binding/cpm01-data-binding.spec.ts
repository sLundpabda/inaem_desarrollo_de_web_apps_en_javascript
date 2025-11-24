import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpm01DataBinding } from './cpm01-data-binding';

describe('Cpm01DataBinding', () => {
  let component: Cpm01DataBinding;
  let fixture: ComponentFixture<Cpm01DataBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cpm01DataBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cpm01DataBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
