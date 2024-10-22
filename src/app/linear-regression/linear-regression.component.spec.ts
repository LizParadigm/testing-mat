import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinearRegressionComponent } from "./linear-regression.component";

const x = 386;

describe(" linear regresion test suite using data_test1", () => {
  const component = new LinearRegressionComponent();
  const { B0, B1 } = component.calcularlinearRegression(
    [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
    [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
  );

  it("Should return B0=-22.55 with the dataset is proxy_size: [130, 650, 99, …] and  actual_added: [186, 699, 132, ...]", () => {
    expect(parseFloat(B0.toFixed(2))).toBe(-22.55);
  });
  it("Should return B1=1.7279 with the dataset Data_Test1", () => {
    expect(parseFloat(B1.toFixed(4))).toBe(1.7279);
  });
  it("Should return yk=644.429 with the dataset Data_Test1 if x=386", () => {
    const yk = component.predict(B0, B1, x);
    expect(parseFloat(yk.toFixed(3))).toBe(644.429);
  });
});

describe(" linear regresion test suite using data_test2", () => {
  const component = new LinearRegressionComponent();
  const { B0, B1 } = component.calcularlinearRegression(
    [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
    [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2],
  );

  it("Should return B0=-4.039 with the dataset Data_Test2", () => {
    expect(parseFloat(B0.toFixed(3))).toBe(-4.039);
  });
  it("Should return B1=0.1681 with the dataset Data_Test2", () => {
    expect(parseFloat(B1.toFixed(4))).toBe(0.1681);
  });
  it("Should return yk=60.858 with the dataset Data_Test2 if x=386", () => {
    const yk = component.predict(B0, B1, x);
    expect(parseFloat(yk.toFixed(3))).toBe(60.858);
  });
});

describe("Linear regresion test suite using data_test3", () => {
  const component = new LinearRegressionComponent();
  const { B0, B1 } = component.calcularlinearRegression(
    [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
    [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
  );

  it("Should return B0=-23.92 with the dataset Data_Test3", () => {
    expect(parseFloat(B0.toFixed(2))).toBe(-23.92);
  });
  it("Should return B1=1.43097 with the dataset Data_Test3", () => {
    expect(parseFloat(B1.toFixed(5))).toBe(1.43097);
  });
  it("Should return yk=528.429 with the dataset Data_Test3 if x=386", () => {
    const yk = component.predict(B0, B1, x);
    expect(parseFloat(yk.toFixed(3))).toBe(528.429);
  });
});

describe("Linear regresion test suite using data_test4", () => {
  const component = new LinearRegressionComponent();
  const { B0, B1 } = component.calcularlinearRegression(
    [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
    [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2],
  );

  it("Should return B0=-4.604 with the dataset Data_Test4", () => {
    expect(parseFloat(B0.toFixed(3))).toBe(-4.604);
  });
  it("Should return B1=0.14016 with the dataset Data_Test4", () => {
    expect(parseFloat(B1.toFixed(5))).toBe(0.14016);
  });
  it("Should return yk=49.4994 with the dataset Data_Test4 if x=386", () => {
    const yk = component.predict(B0, B1, x);
    expect(parseFloat(yk.toFixed(4))).toBe(49.4994);
  });
});