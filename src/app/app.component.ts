import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-app';
  feature: string = 'recipes';

  showFeature(feature: string) {
    this.feature = feature;
  }
}
