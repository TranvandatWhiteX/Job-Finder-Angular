import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {EnterpriseHomeComponent} from "./enterprise/enterprise-home/enterprise-home.component";
import {ClientHomeComponent} from "./client/client-home/client-home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EnterpriseHomeComponent, ClientHomeComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'J-HUNT';
}
