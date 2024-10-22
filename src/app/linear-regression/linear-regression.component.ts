import { Component } from '@angular/core';
import { sumX, sumXX, sumY, sumXY } from "../common/calculate";

@Component({
  selector: 'app-linear-regression',
  standalone: true,
  imports: [],
  templateUrl: './linear-regression.component.html',
  styleUrl: './linear-regression.component.css'
})
export class LinearRegressionComponent {
  calcularlinearRegression(
    x: number[],
    y: number[],
  ): { B0: number; B1: number } {
    const n = x.length;
    const xSum = sumX(x);
    const ySum = sumY(y);
    const xySum = sumXY(x, y);
    const xSquareSum = sumXX(x);

    const xMean = xSum / n;
    const yMean = ySum / n;

    const B1 = (xySum - n * xMean * yMean) / (xSquareSum - n * xMean ** 2);
    const B0 = yMean - B1 * xMean;

    return { B0, B1 };
  }
  predict(B0: number, B1: number, x: number) {
    return B0 + B1 * x;
  }
}