import { Component } from '@angular/core';
import { simpson, errorSimpson } from "../common/simpson_rule";

@Component({
  selector: 'app-simpson',
  standalone: true,
  imports: [],
  templateUrl: './simpson.component.html',
  styleUrl: './simpson.component.css'
})
export class SimpsonComponent {
  calculateSimpsonRule(
    f: (x: number) => number,
    x0: number,
    x1: number,
    num_seg: number,
    error: number
  ) {
    const result = errorSimpson(x0, x1, num_seg, f, error);
    return result;
  }
}