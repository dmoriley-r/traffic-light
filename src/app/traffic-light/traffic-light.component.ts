import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../ngrx/appState.model';

@Component({
  selector: 'traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss'],
})
export class TrafficLightComponent implements OnDestroy {
  colors = {
    off: '#201f1f',
    red: '#e64c3c',
    amber: '#f3d55b',
    green: '#4fba6f',
  };

  selectedColor: string = '';
  subscription: Subscription;

  constructor(private store: Store<AppState>) {
    this.subscription = store
      .select((state) => state.color)
      .subscribe((color) => {
        this.selectedColor = color;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
