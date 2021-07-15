import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { trafficLightReducer } from './store';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';

@NgModule({
  declarations: [AppComponent, TrafficLightComponent],
  imports: [BrowserModule, StoreModule.forRoot({ color: trafficLightReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
