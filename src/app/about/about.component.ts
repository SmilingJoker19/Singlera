import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about = {}
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.about = this.getAbout();
  }

  getAbout() {
    return this.config.getConfig().about;
  }
}
