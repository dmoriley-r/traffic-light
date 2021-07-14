import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './ngrx/appState.model';
import { next } from './ngrx/trafficLight.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  color$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.color$ = store.select((state) => state.color);
  }

  next() {
    this.store.dispatch(next());
  }
}
