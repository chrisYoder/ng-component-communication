import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // example 1
  generatedId = 'test 2';

  // example 2
  changeTitle() {
    this.title = 'Angular app';
  }
}
