import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../core/posts.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { BoxPostComponent } from './box-post/box-post.component';
import { CardPostComponent } from './card-post/card-post.component';
import { UserComponent } from './user/user.component';
import { CardUserComponent } from './card-user/card-user.component';
import { HomeComponent } from './home/home.component';
import { UsersService } from '../core/users.service';
import { CommentsComponent } from './comments/comments.component';
import { CommentsService } from '../core/comments.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaceholderPostComponent } from './placeholder-post/placeholder-post.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    PostComponent,
    HomeComponent,
    UserComponent,
    CardUserComponent,
    CardPostComponent,
    BoxPostComponent,
    CommentsComponent,
    PlaceholderPostComponent
  ],
  providers: [
    PostsService,
    UsersService,
    CommentsService
  ]
})
export class ComponentsModule { }
