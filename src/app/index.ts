// // NGRX
// import {  Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
// import { routerReducer } from '@ngrx/router-store';
// import { environment } from '../../../environments/environment';

// export function storeFreeze<T, V extends Action = Action>(reducer: ActionReducer<T, V>): ActionReducer<T, V> {
//   return function(state, action) {
//     return reducer(state, action);
//   };
// }

// export interface AppState { }

// export const reducers: ActionReducerMap<AppState> = { router: routerReducer };

// export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
