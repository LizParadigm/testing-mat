import { Component } from '@angular/core';
import { simpson, errorSimpson, twoX, oneOverX, x2 } from "../common/simpson_rule";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simpson',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './simpson.component.html',
  styleUrl: './simpson.component.css'
})
export class SimpsonComponent {
  x0!: number;
  x1!: number;
  numSeg!: number;
  error!: number;
  resultado!: number;
  funcion!: any;
  private funciones: { [key: string]: (x: number) => number } = {
    'twoX': twoX,
    'x2': x2,
    'oneOverX': oneOverX,
  };

  calcular() {
    const selectedFunction = this.funciones[this.funcion];
    console.log(this.funcion, this.x0, this.x1, this.numSeg, this.error)
    this.resultado = this.calculateSimpsonRule(selectedFunction, this.x0, this.x1, this.numSeg, this.error);
  }
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