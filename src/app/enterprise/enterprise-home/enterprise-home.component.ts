import { Component } from '@angular/core';
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {HeaderComponent} from "../enterprise-header/enterprise-header.component";

@Component({
  selector: 'app-enterprise-home',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './enterprise-home.component.html',
  styleUrl: './enterprise-home.component.scss'
})
export class EnterpriseHomeComponent {

}
