import { Component } from '@angular/core';
import {faSuitcase, faEllipsisVertical, faCheckDouble} from "@fortawesome/free-solid-svg-icons";
import {faBell} from "@fortawesome/free-regular-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgOptimizedImage} from "@angular/common";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {Button} from "primeng/button";
import {NotificationComponent} from "../../shared/components/notification/notification.component";

@Component({
  selector: 'app-enterprise-header',
  standalone: true,
  imports: [
    FaIconComponent,
    NgOptimizedImage,
    OverlayPanelModule,
    Button,
    NotificationComponent
  ],
  templateUrl: './enterprise-header.component.html',
  styleUrl: './enterprise-header.component.scss'
})
export class HeaderComponent {
  faSuitcase = faSuitcase
  faEllipsisVertical = faEllipsisVertical;
  faBell = faBell;
  faCheckDouble = faCheckDouble;

  notifications = [
    { message: '[Dự án] Task Chỉnh sửa yêu cầu trong Brief 17 - Còn lại thuộc dự án ISS 365 vừa được cập nhật bởi Đặng Ngọc Tụng' },
    { message: '[Dự án] Task Chỉnh sửa yêu cầu trong Brief 17 - Còn lại thuộc dự án ISS 365 vừa được cập nhật bởi Đặng Ngọc Tụng' },
    { message: '[Dự án] Task Chỉnh sửa yêu cầu trong Brief 17 - Còn lại thuộc dự án ISS 365 vừa được cập nhật bởi Đặng Ngọc Tụng' },
    { message: '[Dự án] Task Chỉnh sửa yêu cầu trong Brief 17 - Còn lại thuộc dự án ISS 365 vừa được cập nhật bởi Đặng Ngọc Tụng' },
    { message: '[Dự án] Task Chỉnh sửa yêu cầu trong Brief 17 - Còn lại thuộc dự án ISS 365 vừa được cập nhật bởi Đặng Ngọc Tụng' },
    { message: '[Dự án] Task Chỉnh sửa yêu cầu trong Brief 17 - Còn lại thuộc dự án ISS 365 vừa được cập nhật bởi Đặng Ngọc Tụng' },
    { message: '[Dự án] Task Chỉnh sửa yêu cầu trong Brief 17 - Còn lại thuộc dự án ISS 365 vừa được cập nhật bởi Đặng Ngọc Tụng' },
    { message: '[Dự án] Task Chỉnh sửa yêu cầu trong Brief 17 - Còn lại thuộc dự án ISS 365 vừa được cập nhật bởi Đặng Ngọc Tụng' },
    { message: '[Dự án] Task Chỉnh sửa yêu cầu trong Brief 17 - Còn lại thuộc dự án ISS 365 vừa được cập nhật bởi Đặng Ngọc Tụng' }
  ];
}
