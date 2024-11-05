import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { calculateMean } from './media';
import { convertirArray } from '../common/convertirArray';
import { CommonModule } from '@angular/common';
import { vacio } from '../common/error';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {
  numeros!: string;
  resultado: number | null = null;

  calcular() {
    if (vacio(this.numeros)) {
      return;
    }
    let array = convertirArray(this.numeros);
    this.resultado = calculateMean(array);
  }
}
