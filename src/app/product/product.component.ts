import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product = {};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.product = this.getProduct();
  }

  getProduct() {
    return this.config.getConfig().product;
  }

}
