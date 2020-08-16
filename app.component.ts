import { Component } from '@angular/core';

export interface Card {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  toggle = true;

  cards: Card[] = [
      {title: 'Card1', text: 'Text 1'},
      {title: 'Card2', text: 'Text 2'},
      {title: 'Card3', text: 'Text 3'},
      {title: 'Card3', text: 'Text 3'},
      {title: 'Card3', text: 'Text 3'},
      {title: 'Card3', text: 'Text 3'}
  ];

  toggleCards() {
    this.toggle = !this.toggle;
  }
}
