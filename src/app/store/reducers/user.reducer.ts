import { User } from 'src/app/models/user';
import { createReducer, on } from '@ngrx/store';
import { UserActions } from '../actions';

export const featureKey = 'users';

export class UserState {
  loading: boolean;
  users: Array<User>;
  userSelected: User;
}

export const initialState: UserState = {
  loading: false,
  users: null,
  userSelected: null
};

const UserReducer = createReducer(
  initialState,
  on(UserActions.getUsersAPILoading, (state) => ({ ...state, loading: true })),
  on(UserActions.putUsersStore, ((state, { users }) => ({ ...state, users , loading: false}) ))
);

export function reducer(state, action) {
  return UserReducer(state, action);
}
