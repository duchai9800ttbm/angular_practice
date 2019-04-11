import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('photoState', [
      state('move', style({ transform: 'translate(100%)' })),
      state('rotate', style({ transform: 'rotateY(180deg) rotateZ(90deg)' })),
      transition('* => *', animate('0.5s ease'))
    ])
  ]
})
export class AppComponent {
  title = 'MOC HOA BINH';
  position: string;

  changePosition(position) {
    this.position = position;
  }
}
