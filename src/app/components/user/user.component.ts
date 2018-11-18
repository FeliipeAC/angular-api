import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../core/users.service';
import { Post } from '../../model/post.model';
import { PostsService } from '../../core/posts.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  user: User;
  listaPosts: Post[] = [];
  userId: string;
  
  constructor(private route: ActivatedRoute,
    private usersService: UsersService,
    private postsService: PostsService) {
      /**
      * Pega o ID do post pela rota atual
      */
      this.userId = this.route.snapshot.params['id'];
      console.log('Id:', this.userId);
    }
    
    ngOnInit() {
      
      this.getUser(this.userId);
      console.log('Lista: ', this.listaPosts); 
    }
    
    getUser(id: string) {
      this.usersService.getUserById(id).subscribe(obj => {
        this.user = new User(obj);
        this.getPosts(this.user.id);
        console.log('User: ', this.user);
        console.log('Lista2: ', this.listaPosts); 
      });
    }
    
    getPosts(id: string) {
      this.postsService.getPostsUser(id).subscribe(postsUser => {
        const lista: any = postsUser;
        for(let post of lista) {
          this.listaPosts.push(new Post(post));
        }
      });
    }
    
  }
  