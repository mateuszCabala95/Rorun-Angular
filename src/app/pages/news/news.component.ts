import { Component, OnInit } from '@angular/core';
import {News} from "./mock.data";


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news =News;
  isOpenMore = false;


  onOpenMore = ()=>{
    this.isOpenMore = !this.isOpenMore;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
