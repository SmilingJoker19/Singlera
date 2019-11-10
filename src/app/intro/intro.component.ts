import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  production = {}
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.production = this.getProduction();
  }
  getProduction() {
    return this.config.getConfig().production;
  }
}
