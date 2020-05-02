import { Component, OnInit } from '@angular/core';
import {TeamMember} from "../news/mock.data";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  teamMember = TeamMember;


  constructor() { }

  ngOnInit(): void {
  }

}
