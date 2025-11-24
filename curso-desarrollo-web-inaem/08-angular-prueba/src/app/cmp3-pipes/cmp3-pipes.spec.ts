import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp3Pipes } from './cmp3-pipes';

describe('Cmp3Pipes', () => {
  let component: Cmp3Pipes;
  let fixture: ComponentFixture<Cmp3Pipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp3Pipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp3Pipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
