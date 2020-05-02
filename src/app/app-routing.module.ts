import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {NewsComponent} from "./pages/news/news.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {NewsChosenComponent} from "./pages/news-chosen/news-chosen.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'news/:id', component:NewsChosenComponent},
  {path:'news', component:NewsComponent},
  {path:'contact', component:ContactComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
