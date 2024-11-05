import { TestBed } from '@angular/core/testing';
import { SimpsonComponent } from './simpson.component';
import { twoX, x2, oneOverX } from "../common/simpson_rule";

describe("SimpsonComponent Tests", () => {
  let component: SimpsonComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SimpsonComponent]
    });
    component = TestBed.createComponent(SimpsonComponent).componentInstance;
  });

  it("Should return p=16.0 when f(x)=2x, x0=0, x1=4, num_seg=4, ERROR=0.0001", () => {
    const result = component.calculateSimpsonRule(twoX, 0, 4, 4, 0.0001);
    expect(result).toBeCloseTo(16.0, 1);
  });

  it("Should return p=0.3333 when f(x)=x^2, x0=0, x1=1, num_seg=4, ERROR=0.0001", () => {
    const result = component.calculateSimpsonRule(x2, 0, 1, 4, 0.0001);
    expect(result).toBeCloseTo(0.3333, 3);
  });

  it("Should return p=1.38 when f(x)=1/x, x0=1, x1=4, num_seg=6, ERROR=0.001", () => {
    const result = component.calculateSimpsonRule(oneOverX, 1, 4, 6, 0.001);
    expect(result).toBeCloseTo(1.38, 1);
  });
});
