import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  isDarkTheme: boolean = false;
    lastDialogResult: string;

    foods: any[] = [
      {name: 'Pizza', rating: 'Excellent'},
      {name: 'Burritos', rating: 'Great'},
      {name: 'French fries', rating: 'Pretty good'},
    ];

    progress: number = 0;

    constructor() {
      // Update the value for the progress-bar on an interval.
      setInterval(() => {
        this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
      }, 200);
    }
}