import { TestBed } from '@angular/core/testing';
import { SimpsonComponent } from './simpson.component';
import { FormsModule } from '@angular/forms';
import { twoX, x2, oneOverX } from "../common/simpson_rule";

describe("SimpsonComponent Tests", () => {
  let component: SimpsonComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SimpsonComponent, FormsModule] // Asegúrate de importar FormsModule
    });
    component = TestBed.createComponent(SimpsonComponent).componentInstance;

    // Inicializar valores para las pruebas
    component.x0 = 0;
    component.x1 = 1;
    component.numSeg = 4;
    component.error = 0.01;
    component.funcion = 'twoX'; // Asigna una función para probar
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

  it("Should calculate the result when calcular() is called", () => {
    component.x0 = 0;
    component.x1 = 4;
    component.numSeg = 4;
    component.error = 0.0001;
    component.funcion = 'twoX'; // Seleccionar la función

    component.calcular(); // Llama al método calcular

    expect(component.resultado).toBeDefined(); // Verifica que el resultado esté definido
    expect(component.resultado).toBeCloseTo(16.0, 1); // Compara con el resultado esperado
  });

  it("Should select the correct function when calcular() is called", () => {
    component.funcion = 'x2'; // Cambiar a otra función
    component.calcular(); // Llama al método calcular

    expect(component.resultado).toBeDefined(); // Verifica que el resultado esté definido
    expect(component.resultado).toBeCloseTo(0.3333, 3); // Compara con el resultado esperado
  });
});
