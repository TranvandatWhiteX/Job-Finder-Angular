import {Component, Input, ViewChild} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faSuitcase, faEllipsisVertical, faUser} from "@fortawesome/free-solid-svg-icons";
import {MenubarModule} from "primeng/menubar";
import {NotificationComponent} from "../notification/notification.component";
import {PrimeTemplate} from "primeng/api";
import {Ripple} from "primeng/ripple";
import {NavigationItem} from "../../models/navigation-item.model";
import {User} from "../../models/user.model";
import {NgOptimizedImage} from "@angular/common";
import {OverlayPanel, OverlayPanelModule} from "primeng/overlaypanel";
import {Button} from "primeng/button";
import {TabMenuModule} from "primeng/tabmenu";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FaIconComponent,
    MenubarModule,
    NotificationComponent,
    PrimeTemplate,
    Ripple,
    NgOptimizedImage,
    OverlayPanelModule,
    Button,
    TabMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() items: NavigationItem[] = [];
  @Input() notifications: any[] = [];
  @Input() user?: User;
  @ViewChild('op') overlayPanel!: OverlayPanel;

  faSuitcase = faSuitcase;
  faEllipsisVertical = faEllipsisVertical;
  isVisible = false;
  faUser = faUser;

  toggle(event: MouseEvent) {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.overlayPanel.show(event);
    } else {
      this.overlayPanel.hide();
    }
  }
}
