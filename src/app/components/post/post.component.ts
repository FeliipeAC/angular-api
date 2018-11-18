import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../core/posts.service';
import { Post } from '../../model/post.model';
import { UsersService } from '../../core/users.service';
import { User } from '../../model/user.model';
import { CommentsService } from '../../core/comments.service';
import { Comment } from '../../model/comment.model';
import {animate, style, transition, trigger} from '@angular/animations';
import { Observable } from 'rxjs/Observable';

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
  user: User;
  id: string;
  stateSpinner = false;
  
  constructor(private router: ActivatedRoute,
    private postsServices: PostsService,
    private usersService: UsersService,
    private commentsService: CommentsService) { 
      // this.getPost();
      /**
      * Pega o ID do post pela rota atual
      */
     this.id = router.snapshot.params['id'];
      // this.getPost(this.id);
      // this.getComments(this.id);
    }
    
    ngOnInit() {
      // this.getUserPost();
      this.getPost(this.id);
    }
    
    /**
    * Pega um post
    * @param id - id do post
    */
    getPost(id: string) {
      this.stateSpinner = true;
      this.postsServices.getPost(id).subscribe(objPost => {
        const objP = new Post(objPost);
        this.post = objP;
        this.getComments(this.post.userId);
        this.getUserPost(this.post.userId);
        this.stateSpinner = false;
      });
      
    }
    
    getUserPost(id: string) {
      this.usersService.getUserById(id).subscribe((userPost: any) => {
        const objU = userPost;
        this.user = (new User(objU));
        this.post.setUser(new User(objU));
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
      });
    }
    
  }
  