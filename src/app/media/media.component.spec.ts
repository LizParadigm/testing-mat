import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaComponent, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the correct mean from input numbers', () => {
    component.numeros = '160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503';
    component.calcular();
    expect(component.resultado).toBeCloseTo(550.6, 1);
  });

  it('should calculate the correct mean for decimal numbers', () => {
    component.numeros = '15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2';
    component.calcular();
    expect(component.resultado).toBeCloseTo(60.32, 2);
  });

  it('should handle empty input gracefully', () => {
    component.numeros = '';
    component.calcular();
    expect(component.resultado).toBeNull();
  });

  it('should handle invalid input gracefully', () => {
    component.numeros = 'a, b, c';
    component.calcular();
    expect(component.resultado).toBeNaN();
  });

  it('should display the result in the DOM after calculation', () => {
    component.numeros = '10, 20, 30';
    component.calcular();
    fixture.detectChanges();
    const resultElement = fixture.debugElement.query(By.css('.respuesta')).nativeElement;
    expect(resultElement.textContent).toContain('20');
  });

  it('should call calcular() when the button is clicked', () => {
    spyOn(component, 'calcular');
    const button = fixture.debugElement.query(By.css('.boton_calcular')).nativeElement;
    button.click();
    expect(component.calcular).toHaveBeenCalled();
  });
});
