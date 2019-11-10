import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footercontent = {};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.footercontent = this.getFooter();
  }

  getFooter() {
    return this.config.getConfig().footer;
  }
}
