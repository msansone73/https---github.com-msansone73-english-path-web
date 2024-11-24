import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MenuComponent } from "./general/components/menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'english-path';
}
