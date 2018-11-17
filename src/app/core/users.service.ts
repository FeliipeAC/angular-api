import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  private url = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient ) { }

  /**
   * Retorna os dados de um user
   * @param id - id do user
   */
  getUserById(id: string) {
    return this.http.get(this.url + id);
  }

}
