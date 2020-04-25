import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  rorunLogo = 'assets/home/rorun_logo.jpg'
  fbLogo = 'assets/home/Facebook_Icon.jpg'


  constructor() { }

  ngOnInit(): void {
  }

}
