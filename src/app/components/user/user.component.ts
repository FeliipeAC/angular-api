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
  posts: Post[] = [];
  
  constructor(private route: ActivatedRoute,
    private usersService: UsersService,
    private postsService: PostsService) { }
  
  ngOnInit() {
    /**
    * Pega o ID do post pela rota atual
    */
    this.route.params.subscribe((params: any) => {
      this.getUser(params.id);
      this.getPosts(params.id);
      console.log('Lista: ', this.posts);
    });
    
  }

  getUser(id: string) {
    this.usersService.getUserById(id).subscribe(obj => {
      this.user = new User(obj);
      console.log('User: ', this.user);
      
    });
  }

  getPosts(id: string) {
    this.postsService.getPostsUser(id).subscribe(postsUser => {
      const lista: any = postsUser;
      for(let post of lista) {
        this.posts.push(new Post(post));
      }
    });
  }
  
}
