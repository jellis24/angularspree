import { environment } from './../../../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-contact-info',
  templateUrl: './footer-contact-info.component.html',
  styleUrls: ['./footer-contact-info.component.scss']
})
export class FooterContactInfoComponent implements OnInit {
  contact_info = environment.config.contact_info
  constructor() { }

  ngOnInit() {
  }
  scollTop() {
    window.scrollTo(0, 0)
  }
}
