import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import {NguCarouselModule} from "@ngu/carousel";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsChosenComponent } from './pages/news-chosen/news-chosen.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    NewsComponent,
    ContactComponent,
    NewsChosenComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SectionTitleComponent,
    HeroBannerComponent,
    PhotoCardComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
