import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejemplo1Component } from './formularios/ejemplo1/ejemplo1.component';
import { ZodiacoChinoComponent } from "./formularios/zodiaco-chino/zodiaco-chino.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ejemplo1Component, ZodiacoChinoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularSegundo';
}
