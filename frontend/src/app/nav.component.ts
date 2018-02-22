import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
  <mat-toolbar>
    <button md-button routerLink="/"></button>
    <button md-button routerLink="/question">Question</button>
    <button md-button routerLink="/questions">Question List</button>
  </mat-toolbar>
  `
})

export class NavComponent {

}
