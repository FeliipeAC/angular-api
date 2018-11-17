import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../core/posts.service';
import { Post } from '../../model/post.model';
import { UsersService } from '../../core/users.service';
import { User } from '../../model/user.model';
import { CommentsService } from '../../core/comments.service';
import { Comment } from '../../model/comment.model';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
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
export class PostComponent implements OnInit {
  
  post: Post;
  comments: Comment[] = [];
  id: string;
  
  constructor(private router: ActivatedRoute,
    private postsServices: PostsService,
    private usersService: UsersService,
    private commentsService: CommentsService) { 
      // this.getPost();
    }
    
    ngOnInit() {

      /**
       * Pega o ID do post pela rota atual
       */
      this.router.params.subscribe((params: any) => {
         this.getPost(params.id);
         this.getComments(params.id);
      });
    }
    
    /**
     * Pega um post
     * @param id - id do post
     */
    getPost(id: string) {
      this.postsServices.getPost(id).subscribe(objPost => {
        this.post = new Post(objPost);
        this.usersService.getUserById(this.post.userId).subscribe(userPost => {
          this.post.setUser(new User(userPost));
        });
        console.log('Post: ', this.post);
      });
    }
    
    getId() {
      this.router.params.subscribe(params => {
         
      });
    }

    /**
     * Pega os comments referente ao post
     * @param id - id do post
     */
    getComments(id: string) {
      this.commentsService.getCommentsById(id).subscribe(arrayComment => {
        const list: any = arrayComment; 
        for(let obj of list) {
          const aux = new Comment(obj);
          this.comments.push(aux);
        }
        console.log('Lista: ', this.comments);
      });
    }
    
  }
  