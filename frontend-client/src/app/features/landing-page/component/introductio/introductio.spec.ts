import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introductio } from './introductio';

describe('Introductio', () => {
  let component: Introductio;
  let fixture: ComponentFixture<Introductio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Introductio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introductio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
