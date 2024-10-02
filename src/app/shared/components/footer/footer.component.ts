import { Component } from '@angular/core';
import {faHome, faEnvelope, faPhone, faPrint} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTwitter, faGooglePlus, faYoutube, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  faHome = faHome;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faPrint = faPrint;
  faFaceBook = faFacebook;
  faTwitter = faTwitter;
  faGooglePlus = faGooglePlus;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
}
