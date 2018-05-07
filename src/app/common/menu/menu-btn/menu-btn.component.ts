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

const ANIMATION_DURATION = '200ms';

@Component({
  selector: 'es-menu-btn',
  templateUrl: './menu-btn.component.html',
  styleUrls: ['./menu-btn.component.scss'],

  animations: [
    trigger('top-line-state', [
      state('menu-closed', style({
        transform: 'rotate(0deg)',
      })),
      state('menu-opened', style({
        transformOrigin: '15% 15%',
        transform: 'rotate(45deg)',
      })),

      transition('menu-closed => menu-opened', animate(ANIMATION_DURATION + ' ease')),
      transition('menu-opened => menu-closed', animate(ANIMATION_DURATION + ' ease'))
    ]),

    trigger('mid-line-state', [
      state('menu-closed', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('menu-opened', style({
        opacity: 0,
        transform: 'translateX(-300%)',
      })),

      transition('menu-closed => menu-opened', animate(ANIMATION_DURATION + ' ease-in')),
      transition('menu-opened => menu-closed', animate(ANIMATION_DURATION + ' ease-out'))
    ]),

    trigger('bot-line-state', [
      state('menu-closed', style({
        transform: 'rotate(0deg)',
      })),
      state('menu-opened', style({
        transformOrigin: '15% 95%',
        transform: 'rotate(-45deg)',
      })),

      transition('menu-closed => menu-opened', animate(ANIMATION_DURATION + ' ease')),
      transition('menu-opened => menu-closed', animate(ANIMATION_DURATION + ' ease'))
    ])
  ]
})
export class MenuBtnComponent implements OnInit {

  // mobileOverlay = document.getElementById('mobileOverlay');
  // submenuContainer = document.getElementById('submenuContainer');
  searchResultsVisibility = false;
  menuState = 'menu-closed';


  constructor() { }

  ngOnInit() {
  }

  toggleMenuState(): void {
    this.menuState = this.menuState === 'menu-closed' ? 'menu-opened' : 'menu-closed';
  }
}

