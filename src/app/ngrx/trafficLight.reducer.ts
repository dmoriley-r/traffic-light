import { createReducer, on } from '@ngrx/store';
import { next } from './trafficLight.actions';

export const initialState = 'red';

const _trafficLightReducer = createReducer<string>(
  initialState,
  on(next, (state) => {
    if (state == 'red') return 'amber';
    else if (state == 'green') return 'red';
    else if (state == 'amber') return 'green';
    else return state;
  })
);

export function trafficLightReducer(state, action) {
  return _trafficLightReducer(state, action);
}
