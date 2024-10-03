import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {fontAwesomeIcons} from "./shared/icons/font-awesome-icons";
import {EnterpriseHomeComponent} from "./enterprise/enterprise-home/enterprise-home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EnterpriseHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'J-HUNT';
  private faIcons = inject(FaIconLibrary);

  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faIcons.addIcons(...fontAwesomeIcons);
  }
}
