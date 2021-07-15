import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, next } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store<AppState>) {}

  next() {
    this.store.dispatch(next());
  }
}
