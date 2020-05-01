import { Component, OnInit } from '@angular/core';
import {FeatureModel} from "../../models/Feature.model";
import {HomePageFeatures, News} from "./mock.data";
import { NguCarouselConfig} from "@ngu/carousel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  features:Array<FeatureModel> = HomePageFeatures;
  photoCards = News


  constructor() { }

  ngOnInit(): void {
  }

}
