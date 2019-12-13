import { User } from './../../models/user';
import { createReducer, on } from '@ngrx/store';
import { UserActions } from '../actions';


export const FakeData: Array<User> = [
  { name: 'Smith' },
  { name: 'Peter' },
  { name: 'John' },
  { name: 'Marie' },
  { name: 'Joane' },
];

export const featureKey = 'users';

export class UserState {
  loading: boolean;
  all: Array<User>;
  editAll: boolean;
}

export const initialState: UserState = {
  loading: false,
  all: FakeData,
  editAll: false
};

const UserReducer = createReducer(
  initialState,
  on(UserActions.getUsersAPILoading, (state) => ({ ...state, loading: true })),
  on(UserActions.putUsersStore, ((state, { users }) => {
    return state = { ...state, all: users.map( user => ({ ...user, editing: false } )), loading: false };
  })),
  on(UserActions.getUsersAPILoadingError, (state) => ({ ...state, loading: false })),

  on(UserActions.editUser, (state, { i }) => {
    // tslint:disable-next-line: max-line-length
    const all = state.all.map( (user, index) =>  { if ( index === i) { return { name: user.name, editing : true };   } else { return user; }});
    return state = ({ ...state, all});
  }),
  on(UserActions.editAllUser, (state) => {
    const all = state.all.map( (user) =>  ({ name: user.name, editing : true } ));
    return state = ({ ...state, all, editAll: true});
  }),

  on(UserActions.putUser, (state, { i, name }) => {
    const all = state.all.map( (user, index) =>  { if ( index === i) { return { name, editing : false };   } else { return user; }});
    const anyEditingMode = all.find( user => user.editing === true );
    return state = anyEditingMode ? ({ ...state, all }) : ({ ...state, all, editAll: false });
  }),

  on(UserActions.putALLUser, (state) => {
    const all = state.all.map( (user) =>  ({ name: user.name, editing : false } ));
    return state = ({ ...state, all, editAll: false });
  }),

  on(UserActions.deleteUser, (state, { i }) => {
    const all = state.all.filter( (user, index) => index !== i );
    return state = ({ ...state, all});
  }),
  on(UserActions.addUser, (state, { name }) => {
    const all = [ ...state.all, { name, editing: state.editAll ? state.editAll : false }];
    return state = ({ ...state, all });
  }),

  on(UserActions.deleteAllUser, (state) => ({ ...state, all: [] }))

);

export function reducer(state, action) {
  return UserReducer(state, action);
}
