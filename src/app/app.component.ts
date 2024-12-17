import { Component } from '@angular/core';
import {FixtureComponent} from './components/fixture/fixture.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    FixtureComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gurubet-app';
}
