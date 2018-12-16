import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogged } from '../model/user-logged-model';

@Injectable()
export class AuthenticationService {

  listUsers: any;
  userAuthenticated: UserLogged = null;
  private url = 'https://jsonplaceholder.typicode.com/users/';
  showHeaderFooter = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {
    this.getListaUsuarios();
   }

   /**
    * Autentica o usuário para acessar o sistema
    * @param user usuário para autenticação
    */
  autenticaUser(user: UserLogged) {
    for (const usuario of this.listUsers) {
      if (user.username === usuario.username && user.email === usuario.email) {
        user.name = usuario.name;
        user.id = usuario.id;
        this.userAuthenticated = user;
        this.showHeaderFooter.emit(true);
        return true;
      }
    }
    this.showHeaderFooter.emit(false);
    return false;
  }

  // Carrega a lista com usários que tem acesso ao sistema
  getListaUsuarios() {
    this.http.get(this.url).subscribe(usuarios => {
      this.listUsers = usuarios;
    });
  }
}
