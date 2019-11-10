import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  company = {}

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.company = this.getCompany();
  }

  getCompany() {
    return this.config.getConfig().company;
  }
}
