import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';

  specialist = '<div id="test" class="test"> \n<h3>NAME SPECIALIST</h3>\n<p>random text</p></div>\n</div>';
}
