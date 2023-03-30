import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { BlogCardComponent } from './component/blog-card/blog-card.component';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './component/user/user.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { PostinfoComponent } from './component/postinfo/postinfo.component';

@NgModule({
  declarations: [AppComponent, CardComponent, BlogCardComponent, HomeComponent, UserComponent, NotfoundComponent, PostinfoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
