import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  qtdItens: string;

  constructor() { }

  ngOnInit() {
  }

  showMore(qtd) {
    this.qtdItens = qtd;
    console.log('Qtd: ', this.qtdItens);
  }
}
