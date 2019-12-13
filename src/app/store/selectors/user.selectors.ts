import { AppState } from '../../store/reducers';
import { createSelector } from '@ngrx/store';

export const selectUsersState = (state: AppState) => state.users;
export const getUsers = createSelector(
    selectUsersState, state => state.all
);

export const getEditAllUsers = createSelector(
  selectUsersState, state => state.editAll
);
