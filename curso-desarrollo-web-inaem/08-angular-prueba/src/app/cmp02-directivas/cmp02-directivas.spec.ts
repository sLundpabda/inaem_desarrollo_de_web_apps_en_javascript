import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp02Directivas } from './cmp02-directivas';

describe('Cmp02Directivas', () => {
  let component: Cmp02Directivas;
  let fixture: ComponentFixture<Cmp02Directivas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp02Directivas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp02Directivas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
