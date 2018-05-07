import {
  Component,
  OnInit
} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'es-menu-btn',
  templateUrl: './menu-btn.component.html',
  styleUrls: ['./menu-btn.component.scss'],

  animations: [
    trigger('top-opened', [
      state('0', style({
        transform: 'rotate(0deg)',
      })),
      state('1', style({
        transformOrigin: '15% 15%',
        transform: 'rotate(45deg)',
      })),

      transition('0 => 1', animate('200ms ease')),
      transition('1 => 0', animate('200ms ease'))
    ]),

    trigger('mid-opened', [
      state('0', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('1', style({
        opacity: 0,
        transform: 'translateX(-300%)',
      })),

      transition('0 => 1', animate('200ms ease-in')),
      transition('1 => 0', animate('200ms ease-out'))
    ]),

    trigger('bot-opened', [
      state('0', style({
        transform: 'rotate(0deg)',
      })),
      state('1', style({
        transformOrigin: '15% 95%',
        transform: 'rotate(-45deg)',
      })),

      transition('0 => 1', animate('200ms ease')),
      transition('1 => 0', animate('200ms ease'))
    ])
  ]
})
export class MenuBtnComponent implements OnInit {

  // mobileOverlay = document.getElementById('mobileOverlay');
  // submenuContainer = document.getElementById('submenuContainer');
  searchResultsVisibility = false;
  opened = false;


  constructor() { }

  ngOnInit() {
  }

  showMenu(): void {
  }
}

