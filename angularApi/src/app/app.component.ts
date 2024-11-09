import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TempComponent } from "./tem/temp/temp.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AddMessageComponent } from "./tem/add-message/add-message.component";
import { ListMessageComponent } from "./tem/list-message/list-message.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TempComponent, NavbarComponent, AddMessageComponent, ListMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularApi';
}
