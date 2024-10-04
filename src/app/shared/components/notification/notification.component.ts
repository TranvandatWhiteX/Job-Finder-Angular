import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {faCheckDouble} from "@fortawesome/free-solid-svg-icons";
import {Button} from "primeng/button";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {OverlayPanel, OverlayPanelModule} from "primeng/overlaypanel";
import {NgClass} from "@angular/common";
import {Event} from "@angular/router";

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [
    Button,
    FaIconComponent,
    OverlayPanelModule,
    NgClass
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit {
  @Input() notifications: { message: string, isImportant: boolean }[] = [];
  @ViewChild('op') overlayPanel!: OverlayPanel;

  isVisible = false;
  isAllNotification: boolean = true;
  notificationMessages: { message: string, isImportant: boolean }[] = [];
  faCheckDouble = faCheckDouble;

  constructor() {
  }

  ngOnInit(): void {
    this.notificationMessages = this.notifications;
  }

  toggle(event: MouseEvent) {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.overlayPanel.show(event);
    } else {
      this.overlayPanel.hide();
    }
  }

  toggleNotification(type: string) {
    this.isAllNotification = type === 'ALL-NOTIFICATION';
    if (!this.isAllNotification) {
      this.notifications = this.notifications.filter(notification => notification.isImportant);
    } else {
      this.notifications = this.notificationMessages;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.overlayPanel && this.overlayPanel.overlayVisible) {
      this.overlayPanel.hide();
    }
  }
}
