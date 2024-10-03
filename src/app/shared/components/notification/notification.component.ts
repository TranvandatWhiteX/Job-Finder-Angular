import {Component, Input, ViewChild} from '@angular/core';
import {faBell} from "@fortawesome/free-regular-svg-icons";
import {faCheckDouble} from "@fortawesome/free-solid-svg-icons";
import {Button} from "primeng/button";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {OverlayPanel, OverlayPanelModule} from "primeng/overlaypanel";

@Component({
  selector: 'app-notification',
  standalone: true,
    imports: [
        Button,
        FaIconComponent,
        OverlayPanelModule
    ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  faBell = faBell;
  faCheckDouble = faCheckDouble;

  @Input() notifications: { message: string }[] = [];
  @ViewChild('op') overlayPanel!: OverlayPanel;

  isVisible = false;

  toggle(event: Event) {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.overlayPanel.show(event);
    } else {
      this.overlayPanel.hide();
    }
  }
}
