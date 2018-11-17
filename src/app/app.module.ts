import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { BoxPostComponent } from './components/box-post/box-post.component';
import { HeaderComponent } from './default/header/header.component';
import { FooterComponent } from './default/footer/footer.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
