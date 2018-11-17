import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../core/posts.service';
import { Post } from '../../model/post.model';
import { UsersService } from '../../core/users.service';
import { User } from '../../model/user.model';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-box-post',
  templateUrl: './box-post.component.html',
  styleUrls: ['./box-post.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
      style({opacity: 0}),
      animate(500, style({opacity: 1}))
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
    animate(200, style({opacity: 0}))
  ])
]),
]

})
export class BoxPostComponent implements OnInit {
  
  listaPosts: Post[] = [];
  placeHolder = true;
  
  constructor(private postsService: PostsService,
    private usersService: UsersService) {
      
      
    }
    
    ngOnInit() {
      this.carregaPosts();
    }
    
    /**
    * Carrega a lista com os posts
    */
    carregaPosts() {
      /**
      * Pega a lista de posts
      */
      this.postsService.getPosts().subscribe(lista => {
        const listaAux: any = lista;
        for (let post of listaAux) {
          // console.log('Post: ', post);
          const objPost = new Post(post);
          
          /**
          * Pega o usário que criou o post
          */
          this.usersService.getUserById(objPost.userId).subscribe(user => {
            const objUser = new User(user);
            objPost.setUser(objUser);
            this.listaPosts.push(objPost);
          });
          
        }
        console.log('Posts: ', this.listaPosts);
        this.placeHolder = false;
      }); 
    }
  }
  