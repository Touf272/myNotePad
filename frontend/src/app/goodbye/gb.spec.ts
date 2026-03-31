import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gb } from 'gb';

describe('Gb', () => {
  let component: Gb;
  let fixture: ComponentFixture<Gb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gb],
    }).compileComponents();

    fixture = TestBed.createComponent(Gb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
