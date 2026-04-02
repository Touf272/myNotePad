import { ComponentFixture, TestBed } from '@angular/core/testing';

import { modifyPage } from './modifypage';

describe('modifyPage', () => {
  let component: modifyPage;
  let fixture: ComponentFixture<modifyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [modifyPage],
    }).compileComponents();

    fixture = TestBed.createComponent(modifyPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
