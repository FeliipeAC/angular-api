import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../model/post.model';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css'],
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
export class CardPostComponent implements OnInit {

  @Input() post: Post;

  constructor() { 
    
  }

  ngOnInit() {
      console.log('Post: ', this.post);
    
  }

}
