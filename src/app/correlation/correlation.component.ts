import { Component } from '@angular/core';
import { sumX, sumY, sumXX, sumYY, sumXY } from "../common/calculate";
import { convertirArray } from '../common/convertirArray';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-correlation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './correlation.component.html',
  styleUrl: './correlation.component.css'
})
export class CorrelationComponent {
  numerosX!: string;
  numerosY!: string;
  resultado!: any;

  calcular() {
    let x = convertirArray(this.numerosX);
    let y = convertirArray(this.numerosY);

    this.resultado = this.calculateCorrelation(x, y);
  }

  calculateCorrelation(x: number[], y: number[]) {
    const n = x.length;
    const sumXVal = sumX(x);
    const sumYVal = sumY(y);
    const sumXXVal = sumXX(x);
    const sumYYVal = sumYY(y);
    const sumXYVal = sumXY(x, y);

    const numerator = n * sumXYVal - sumXVal * sumYVal;
    const denominator = Math.sqrt(
      (n * sumXXVal - sumXVal ** 2) * (n * sumYYVal - sumYVal ** 2),
    );

    const r = numerator / denominator;
    const rr = r ** 2;
    return { r, rr };
  }

}
