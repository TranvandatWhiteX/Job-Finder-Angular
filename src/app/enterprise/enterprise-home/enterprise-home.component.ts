import { Component } from '@angular/core';
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {HeaderComponent} from "../enterprise-header/enterprise-header.component";
import {RouterOutlet} from "@angular/router";
import {EnterpriseInfoComponent} from "../enterprise-info/enterprise-info.component";

@Component({
  selector: 'app-enterprise-home',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet,
    EnterpriseInfoComponent
  ],
  templateUrl: './enterprise-home.component.html',
  styleUrl: './enterprise-home.component.scss'
})
export class EnterpriseHomeComponent {

}
