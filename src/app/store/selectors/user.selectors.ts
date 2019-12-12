import { AppState } from '../../store/reducers';
import { createSelector } from '@ngrx/store';

export const selectUsersState = (state: AppState) => state.users;
export const getUser = createSelector(
  selectUsersState, state => state
);

export const getUsers = createSelector(
    selectUsersState, state => state
);
