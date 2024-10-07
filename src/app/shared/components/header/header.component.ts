import {Component, Input} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faSuitcase, faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import {MenubarModule} from "primeng/menubar";
import {NotificationComponent} from "../notification/notification.component";
import {PrimeTemplate} from "primeng/api";
import {Ripple} from "primeng/ripple";
import {NavigationItem} from "../../models/navigation-item.model";
import {User} from "../../models/user.model";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FaIconComponent,
    MenubarModule,
    NotificationComponent,
    PrimeTemplate,
    Ripple,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() items: NavigationItem[] = [];
  @Input() notifications: any[] = [];
  @Input() user?: User;
  faSuitcase = faSuitcase;
  faEllipsisVertical = faEllipsisVertical;
}
