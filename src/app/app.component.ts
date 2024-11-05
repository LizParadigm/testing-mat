import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MediaComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unit-testing';
}
