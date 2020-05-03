import {Injectable} from '@angular/core';
import {News} from "../news/mock.data";


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() {
  }


  getNews = ()=>{
    return News;
  }


}



