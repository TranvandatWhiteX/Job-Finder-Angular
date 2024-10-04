import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faBuilding} from "@fortawesome/free-regular-svg-icons";
import {faKey, faCamera} from "@fortawesome/free-solid-svg-icons";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-enterprise-info',
  standalone: true,
  imports: [
    FaIconComponent,
    NgClass
  ],
  templateUrl: './enterprise-info.component.html',
  styleUrl: './enterprise-info.component.scss'
})
export class EnterpriseInfoComponent {
  faBuilding = faBuilding;
  faKey = faKey;
  faCamera = faCamera;
  isEnterpriseInfo: boolean = true;

  toggle(type: string) {
    this.isEnterpriseInfo = type === 'INFO';
  }
}
