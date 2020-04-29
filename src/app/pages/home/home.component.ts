import { Component, OnInit } from '@angular/core';
import {FeatureModel} from "../../models/Feature.model";
import {HomePageFeatures} from "./mock.data";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  features:Array<FeatureModel> = HomePageFeatures;


  constructor() { }

  ngOnInit(): void {
  }

}
