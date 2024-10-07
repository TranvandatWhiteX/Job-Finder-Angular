import { Component } from '@angular/core';
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {RouterOutlet} from "@angular/router";
import {EnterpriseInfoComponent} from "../enterprise-info/enterprise-info.component";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {NavigationItem} from "../../shared/models/navigation-item.model";

@Component({
  selector: 'app-enterprise-home',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet,
    EnterpriseInfoComponent,
    HeaderComponent
  ],
  templateUrl: './enterprise-home.component.html',
  styleUrl: './enterprise-home.component.scss'
})
export class EnterpriseHomeComponent {

  items: NavigationItem[] = [
    { label: 'Doanh nghiệp', routerLink: '/home' },
    { label: 'Quản lý', routerLink: '/jobs' }
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
