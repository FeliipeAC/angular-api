import { Component, OnInit, Input, ElementRef, HostListener } from '@angular/core';
import { PostsService } from '../../core/posts.service';
import { Post } from '../../model/post.model';
import { UsersService } from '../../core/users.service';
import { User } from '../../model/user.model';
import {animate, style, transition, trigger, state} from '@angular/animations';
import { ElementDef } from '@angular/core/src/view';

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

  // Posição inicial para pegar os posta
  startItens = 0;
  // Posição final
  endItens = 5;

  state = false;
  isBottom = false;

  constructor(private postsService: PostsService,
    private usersService: UsersService,
    public el: ElementRef) {

    }

    ngOnInit() {
      console.log('Qtd: ', this.startItens, this.endItens);
      this.carregaPosts(this.startItens, this.endItens);
    }

    /**
    * Carrega a lista com os posts
    */
    carregaPosts(start, end) {
      /**
      * Pega a lista de posts
      */
      this.postsService.getPosts(start, end).subscribe(lista => {
        const listaAux: any = lista;
        for (const post of listaAux) {
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

    /**
     * Carrega mais posts (5 por vez)
     */
    showMore() {
      // Atualiza as posições para o próximo intervalo de posts
      this.startItens = this.endItens;
      this.endItens += 5;

      // Adiciona os novos 5 posts a lista
      this.carregaPosts(this.startItens, this.endItens);
    }

    /**
    * Escuta o evento de scroll da página
    */
    @HostListener('window:scroll', [])
    onWindowScroll() {

      // Scroll máximo da página
      const scrollMax = document.body.offsetHeight - window.innerHeight;

      // Mostra o botão de voltar ao topo se o scroll for maior que 120px
      if (window.scrollY > 120) {
        this.state = true;
      } else {
        this.state = false;
      }

      // Altera as cores do botão se estiver na região do footer
      if (window.scrollY > scrollMax - 150) {
        this.isBottom = true;
      } else {
        this.isBottom = false;
      }

    }

    /**
    * Volta para o topo da página
    */
    backTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }

  }
