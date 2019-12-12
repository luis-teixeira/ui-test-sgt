import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { User } from './../../models/user';
import { environment } from '../../../environments/environment';
import * as fromUser from './user.reducer';

export interface AppState {
  [fromUser.featureKey]: fromUser.UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromUser.featureKey]: fromUser.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
