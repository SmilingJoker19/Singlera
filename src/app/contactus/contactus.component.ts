import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactus = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.contactus = this.getContact();
  }
  getContact() {
    return this.config.getConfig().contact;
  }

}
