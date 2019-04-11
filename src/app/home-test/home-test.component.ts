import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-home-test',
  templateUrl: './home-test.component.html',
  styleUrls: ['./home-test.component.css'],
  animations: [
    trigger('enterAnimation', [
        transition(':enter', [
          style({ height: '0', opacity: 0}),
          animate('300ms', style({ height: '*', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ height: '*', opacity: 1 }),
          animate('300ms', style({ height: '0', opacity: 0 }))
        ])
      ]
    ),
    trigger('toggle', [
      state('hide', style({
        transform: 'rotate(-90deg)'
      })),
      state('show', style({
        transform: 'rotate(0deg)'
      })),
      transition('hide <=> show', [ animate('0.2s') ])
    ]
  )
  ]
})
export class HomeTestComponent implements OnInit {

  history = [];
  show = false;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getHistoryChange().subscribe(data => {
      this.history = data.result.data;
      console.log(this.history);
    });
  }
}
