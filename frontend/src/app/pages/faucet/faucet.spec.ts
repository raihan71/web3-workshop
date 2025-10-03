import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faucet } from './faucet';

describe('Faucet', () => {
  let component: Faucet;
  let fixture: ComponentFixture<Faucet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Faucet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faucet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
