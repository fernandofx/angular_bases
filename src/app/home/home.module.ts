import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { IonContent } from '@ionic/angular/standalone';


@NgModule({
  declarations: [
    HomeComponent,
    ArticleComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonContent

    
  ]
})
export class HomeModule { }
