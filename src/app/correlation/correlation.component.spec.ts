import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorrelationComponent } from './correlation.component';

describe("CorrelationComponent data_test1", () => {
  const component = new CorrelationComponent();
  const { r, rr } = component.calculateCorrelation(
    [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
    [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
  );

  it("Should return r=0.9545 with the dataset Data_Test1", () => {
    expect(parseFloat(r.toFixed(4))).toBe(0.9545);
  });
  it("Should return rr=0.9111 with the dataset Data_Test1", () => {
    expect(parseFloat(rr.toFixed(4))).toBe(0.9111);
  });
});

describe("CorrelationComponent data_test2", () => {
  const component = new CorrelationComponent();
  const { r, rr } = component.calculateCorrelation(
    [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
    [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
  );

  it("Should return r=0.9333 with the dataset Data_Test2", () => {
    expect(parseFloat(r.toFixed(4))).toBe(0.9333);
  });
  it("Should return rr=0.8711 with the dataset Data_Test2", () => {
    expect(parseFloat(rr.toFixed(4))).toBe(0.8711);
  });
});

describe("CorrelationComponent data_test3", () => {
  const component = new CorrelationComponent();
  const { r, rr } = component.calculateCorrelation(
    [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
    [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
  );

  it("Should return r=0.9631 with the dataset Data_Test3", () => {
    expect(parseFloat(r.toFixed(4))).toBe(0.9631);
  });
  it("Should return rr=0.8711 with the dataset Data_Test3", () => {
    expect(parseFloat(rr.toFixed(4))).toBe(0.9276);
  });
});

describe("CorrelationComponent data_test4", () => {
  const component = new CorrelationComponent();
  const { r, rr } = component.calculateCorrelation(
    [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
    [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
  );

  it("Should return r=0.9480 with the dataset Data_Test4", () => {
    expect(parseFloat(r.toFixed(4))).toBe(0.948);
  });
  it("Should return rr=0.8711 with the dataset Data_Test3", () => {
    expect(parseFloat(rr.toFixed(4))).toBe(0.8988);
  });
});