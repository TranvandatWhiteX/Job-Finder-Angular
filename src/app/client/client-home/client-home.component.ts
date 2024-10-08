import { Component } from '@angular/core';
import {EnterpriseInfoComponent} from "../../enterprise/enterprise-info/enterprise-info.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {NavigationItem} from "../../shared/models/navigation-item.model";
import {ClientHomepageComponent} from "../client-homepage/client-homepage.component";

@Component({
  selector: 'app-client-home',
  standalone: true,
  imports: [
    EnterpriseInfoComponent,
    FooterComponent,
    HeaderComponent,
    ClientHomepageComponent
  ],
  templateUrl: './client-home.component.html',
  styleUrl: './client-home.component.scss'
})
export class ClientHomeComponent {
  items: NavigationItem[] = [
    {
      label: 'Việc làm',
      routerLink: '/home'
    },
    {
      label: 'Công ty',
      routerLink: '/jobs'
    }
  ];

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
