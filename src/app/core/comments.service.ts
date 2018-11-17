import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentsService {

  private url = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) { }

  /**
   * Retorna a lista de comments de um post
   * @param idPost - id do post
   */
  getCommentsById(idPost: string) {
    return this.http.get(this.url + idPost + '/comments');
  }

}
