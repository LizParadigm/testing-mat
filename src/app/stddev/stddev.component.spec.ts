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


});
