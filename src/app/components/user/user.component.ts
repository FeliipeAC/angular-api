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
  listaPosts: Post[];
  userId: string;

  constructor(private route: ActivatedRoute,
    private usersService: UsersService,
    private postsService: PostsService) {
      this.listaPosts = [];

      /**
      * Pega o ID do post pela rota atual
      */
      this.userId = this.route.snapshot.params['id'];
      this.getUser(this.userId);
      this.getPosts();
      console.log('Id:', this.userId);
    }

    ngOnInit() {

      // this.getUser(this.userId);
      // this.getPosts();
      // console.log('Lista: ', this.listaPosts);
    }

    getUser(id: string) {
      this.usersService.getUserById(id).subscribe(obj => {
        this.user = new User(obj);
        // this.getPosts(this.user.id);
        // console.log('User: ', this.user);
        // console.log('Lista2: ', this.listaPosts);
      });
    }

    getPosts() {
      // console.log('Aqui');
      this.postsService.getPostsUser(this.userId).subscribe((postsUser: Post[]) => {
        // const lista: any = postsUser;
        this.listaPosts = postsUser;
        console.log('Posts user: ', postsUser);
        // for(const post of postsUser) {
        //   this.listaPosts.push(new Post(post));
        // }
      });
    }

  }
