import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { RouterLinkActive } from '@angular/router';
import { ConfigService } from '../config.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activetab = 'home';

  constructor() { }

  ngOnInit() {
    $(document).ready( function () {
      /*Responsive Navigation*/
      $("#nav-mobile").html($("#nav-main").html());
      $("#nav-trigger span").on("click",function() {
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
          $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
          $(this).removeClass("open");
        } else {
          $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
          $(this).addClass("open");
        }
      });
    
      $("#nav-mobile ul a").removeClass("active");
      $("#nav-mobile ul a").on("click",function() {
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
          $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
          $("#nav-trigger span").removeClass("open");
        }
      });
    });
  }

  getActiveTab(tabname:string){
    this.activetab = tabname;
  }

}
