import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slider1 = {
  }
  constructor(private config: ConfigService) {  
  }
  
  ngOnInit() {
    this.slider1 = this.getSlider1();
    if(window.innerWidth<480){
      this.images = ['../assets/images/background1-mobile.jpg', '../assets/images/background2-mobile.jpg', '../assets/images/background3-mobile.jpg'];
    }else{
      this.images = ['../assets/images/background1-static.jpg', '../assets/images/background2-static.jpg','../assets/images/background3-static.jpg'];
    }
  }
  images = [];
  
  getSlider1() {
    return this.config.getConfig().slider1;
  }

  onResize(event) {
    if(window.innerWidth<480){
      this.images = ['../assets/images/background1-mobile.jpg', '../assets/images/background2-mobile.jpg', '../assets/images/background3-mobile.jpg'];
    }else{
      this.images = ['../assets/images/background1-static.jpg', '../assets/images/background2-static.jpg','../assets/images/background3-static.jpg'];
    }
  }
  
}

