import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StddevComponent } from './stddev.component';
import { FormsModule } from '@angular/forms';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StddevComponent, FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the correct standard deviation for column [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]', () => {
    component.numeros = '160,591,114,229,230,270,128,1657,624,1503';
    component.calcular();
    fixture.detectChanges();
    expect(component.resultado).toBeCloseTo(572.03, 2);
  });

  it('should calculate the correct standard deviation for column [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
    component.numeros = '15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2';
    component.calcular();
    fixture.detectChanges();
    expect(component.resultado).toBeCloseTo(62.26, 2);
  });

  it('should not display the result if no numbers are entered', () => {
    component.numeros = '';
    component.calcular();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const resultText = compiled.querySelector('.respuesta');
    expect(resultText).toBeNull();
  });

  it('should handle invalid input gracefully', () => {
    component.numeros = 'invalid,input,values';
    component.calcular();
    fixture.detectChanges();
    expect(component.resultado).toBeNaN();
  });

  it('should display the calculated result in the template', () => {
    component.numeros = '10,20,30,40,50';
    component.calcular();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const resultText = compiled.querySelector('.respuesta')?.textContent;
    expect(resultText).toContain(component.resultado.toString());
  });

  it('should display the correct standard deviation when input is provided and button is clicked', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('.input_generico');
    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('.boton_calcular');
    inputElement.value = '160,591,114,229,230,270,128,1657,624,1503';
    inputElement.dispatchEvent(new Event('input'));
    buttonElement.click();
    fixture.detectChanges();
    const respuestaElement: HTMLElement = fixture.nativeElement.querySelector('.respuesta');
    expect(Number(respuestaElement.textContent)).toBeCloseTo(572.03, 2);
  });
});
