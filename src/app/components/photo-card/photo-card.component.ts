import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {

  @Input() photo;
  @Input() name;
  @Input() subtitle;


  constructor() { }

  ngOnInit(): void {
  }

}
