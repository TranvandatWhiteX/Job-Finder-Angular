import { Component } from '@angular/core';
import {faSuitcase, faEllipsisVertical, faCheckDouble} from "@fortawesome/free-solid-svg-icons";
import {faBell} from "@fortawesome/free-regular-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {Button} from "primeng/button";
import {NotificationComponent} from "../../shared/components/notification/notification.component";
import {MenubarModule} from "primeng/menubar";
import {Ripple} from "primeng/ripple";

@Component({
  selector: 'app-enterprise-header',
  standalone: true,
  imports: [
    FaIconComponent,
    NgOptimizedImage,
    OverlayPanelModule,
    Button,
    NotificationComponent,
    MenubarModule,
    Ripple,
    NgClass
  ],
  templateUrl: './enterprise-header.component.html',
  styleUrl: './enterprise-header.component.scss'
})
export class HeaderComponent {
  faSuitcase = faSuitcase
  faEllipsisVertical = faEllipsisVertical;

  items = [
    {
      label: 'Doanh nghiệp'
    },
    {
      label: 'Quản lý'
    }
  ]

  notifications = [
    { message: '[Dự án] Task Chỉnh sửa yêu cầu trong Brief 17 - Còn lại thuộc dự án ISS 365 vừa được cập nhật bởi Đặng Ngọc Tụng', isImportant: true },
    { message: '[Dự án] Task Chỉnh sửa yêu cầu trong Brief 17 - Còn lại thuộc dự án ISS 365 vừa được cập nhật bởi Đặng Ngọc Tụng', isImportant: false },
    { message: '[Dự án] Task Chỉnh sửa yêu cầu trong Brief 17 - Còn lại thuộc dự án ISS 365 vừa được cập nhật bởi Đặng Ngọc Tụng', isImportant: false },
    { message: '[Dự án] Task Chỉnh sửa yêu cầu trong Brief 17 - Còn lại thuộc dự án ISS 365 vừa được cập nhật bởi Đặng Ngọc Tụng', isImportant: false },
    { message: '[Dự án] Task Chỉnh sửa yêu cầu trong Brief 17 - Còn lại thuộc dự án ISS 365 vừa được cập nhật bởi Đặng Ngọc Tụng', isImportant: false },
    { message: '[Dự án] Task Chỉnh sửa yêu cầu trong Brief 17 - Còn lại thuộc dự án ISS 365 vừa được cập nhật bởi Đặng Ngọc Tụng', isImportant: false },
    { message: '[Dự án] Task Chỉnh sửa yêu cầu trong Brief 17 - Còn lại thuộc dự án ISS 365 vừa được cập nhật bởi Đặng Ngọc Tụng', isImportant: false },
    { message: '[Dự án] Task Chỉnh sửa yêu cầu trong Brief 17 - Còn lại thuộc dự án ISS 365 vừa được cập nhật bởi Đặng Ngọc Tụng', isImportant: false },
    { message: '[Dự án] Task Chỉnh sửa yêu cầu trong Brief 17 - Còn lại thuộc dự án ISS 365 vừa được cập nhật bởi Đặng Ngọc Tụng', isImportant: true }
  ];
}
