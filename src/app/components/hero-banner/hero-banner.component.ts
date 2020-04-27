import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeroBannerComponent implements OnInit {
   @Input() btnText;

  text = 'Lorem ipsum dolor sit amet, <span>consectetur adipisicing</span> elit. Cum, dolorem, dolores earum eius iusto magni nemo nesciunt perferendis reiciendis saepe sed sequi sit tempore <span>veniam</span> voluptas. Alias amet architecto eius facilis necessitatibus nihil <span>numquam</span> quibusdam temporibus vel vero? Cupiditate debitis delectus distinctio ex laboriosam nihil nobis numquam obcaecati placeat provident?';

  sign = 'Jonathan Doe';



  constructor() { }

  ngOnInit(): void {
  }

}
