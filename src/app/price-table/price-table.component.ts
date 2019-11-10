import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.css']
})
export class PriceTableComponent implements OnInit {
  pricetable = {};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.pricetable = this.getPrice();
  }
  getPrice() {
    return this.config.getConfig().pricingtable;
  }
}
