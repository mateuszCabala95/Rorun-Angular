import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import {NewsService} from "./news.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-news-chosen',
  templateUrl: './news-chosen.component.html',
  styleUrls: ['./news-chosen.component.scss']
})
export class NewsChosenComponent implements OnInit {

  id;

  bannerPath = 'assets/news_chosen/background_image.jpg';
  header = 'Aktualności';
  subHeader = 'sportowe';

  newsTitle = '39 PZU Maraton Warszawski';
  newsSubTitle = 'zobacz relację';
  description = true;

  newsPhotos = [
    {
      src: 'assets/news_chosen/news1.jpg',
      alt: 'runner'
    },
    {
      src: 'assets/news_chosen/news2.jpg',
      alt: 'tired runner'
    },
    {
      src: 'assets/news_chosen/news3.jpg',
      alt: 'winning runner'
    },

  ];

  anotherNews = [];

  constructor(private route: ActivatedRoute, private news: NewsService) {
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(`id: ${this.id}`);
    this.getNews()
  }

  getNews = () => {
    this.anotherNews = this.news.getNews();

  }


}
