import { Component } from '@angular/core';
import { ScrollCheckEvent } from './common/directives/scroll-check.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scrollDepth';
  scrolledPercent = 0;

  scrollChange(scrollEvent: ScrollCheckEvent) {
    console.log(scrollEvent);
    this.scrolledPercent = scrollEvent.percentage;
  }
}
