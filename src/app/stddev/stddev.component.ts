import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { calculateStdDev } from './stddev';
import { convertirArray } from '../common/convertirArray';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stddev',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './stddev.component.html',
  styleUrl: './stddev.component.css'
})
export class StddevComponent {
  numeros!: string;
  resultado!: number;


  calcular() {
    let array = convertirArray(this.numeros);
    if (array.includes(NaN) || array.length === 0) {
      this.resultado = NaN;
    } else {
      this.resultado = calculateStdDev(array);
    }
  }
}
