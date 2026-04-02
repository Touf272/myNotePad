import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mainPage } from './mainpage';

describe('mainpage', () => {
  let component: mainPage;
  let fixture: ComponentFixture<mainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [mainPage],
    }).compileComponents();

    fixture = TestBed.createComponent(mainPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
