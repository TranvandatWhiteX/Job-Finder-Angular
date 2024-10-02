import { Component } from '@angular/core';
import {faSuitcase, faEllipsisVertical, faCheckDouble} from "@fortawesome/free-solid-svg-icons";
import {faBell} from "@fortawesome/free-regular-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgOptimizedImage} from "@angular/common";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {Button} from "primeng/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FaIconComponent,
    NgOptimizedImage,
    OverlayPanelModule,
    Button
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faSuitcase = faSuitcase
  faEllipsisVertical = faEllipsisVertical;
  faBell = faBell;
  faCheckDouble = faCheckDouble;

  notifications = [
    { message: 'You have a new message' },
    { message: 'Your report is ready' },
    { message: 'Meeting at 10 AM' }
  ];
}
