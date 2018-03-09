import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
  <mat-toolbar>
    <button mat-button routerLink="/">Home</button>
    <button mat-button routerLink="/question">Question</button>
    <button mat-button routerLink="/questions">Question List</button>
  </mat-toolbar>
  `
})

export class NavComponent {

}
