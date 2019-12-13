import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';

export const getUsersAPI = createAction('[User Action] getUsersAPI');
export const putUsersStore = createAction('[User Action] putUsersStore', props<{ users: Array<User> }>());
export const init = createAction('[User Action] init');


export const getUsersAPILoading = createAction('[User Action] getUsersAPILoading');
export const getUsersAPILoadingError = createAction('[User Action] getUsersAPILoadingError');

export const editAllUser = createAction('[User Action] editAllUser');
export const editUser = createAction('[User Action] editUser',  props<{ i }>());

export const putUser = createAction('[User Action] putUser',  props<{ i, name }>());
export const putALLUser = createAction('[User Action] putALLUser');

export const deleteUser = createAction('[User Action] deleteUser',  props<{ i }>());
export const addUser = createAction('[User Action] addUser',  props<{ name }>());

export const deleteAllUser = createAction('[User Action] deleteAllUser');
