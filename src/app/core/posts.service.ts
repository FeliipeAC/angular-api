import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post.model';

@Injectable()
export class PostsService {
  
  private url = 'https://jsonplaceholder.typicode.com/posts';
  private urlUser = 'https://jsonplaceholder.typicode.com/users/';
  
  constructor(private http: HttpClient) { }
  
  /**
  * Retorna um JSON com os posts (limitada em 20)
  */
  getPosts(start, end) {
    return this.http.get(this.url + '?_start=' + start + '&_end=' + end);
  }
  
  /**
  * Pega um post pelo ID
  * @param id - ID do post
  * @return Post - retorna um objeto
  */
  getPost(id: string) {
    return  this.http.get(this.url + '/' + id);
    // const post = new Post(obj);
    // return post;
  }

  /**
   * Retorna os posts de um user
   * @param id - id do user
   */
  getPostsUser(id: string) {
    return this.http.get(this.urlUser + id + '/posts');
  }
  
}
