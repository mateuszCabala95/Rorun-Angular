import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  arrowPath  ='assets/home/up_arrow.png';
  facebookPath = 'assets/home/Facebook_Icon2.png'

onScrollToTop = ()=>{
  window.scrollTo(0,0);
}
  constructor() { }

  ngOnInit(): void {
  }

}
