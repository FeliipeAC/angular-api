import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../model/user.model';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css'],
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
export class CardUserComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
