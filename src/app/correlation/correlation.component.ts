import { Component } from '@angular/core';
import { sumX, sumY, sumXX, sumYY, sumXY } from "../common/calculate";

@Component({
  selector: 'app-correlation',
  standalone: true,
  imports: [],
  templateUrl: './correlation.component.html',
  styleUrl: './correlation.component.css'
})
export class CorrelationComponent {
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
