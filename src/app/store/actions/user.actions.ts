import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';

export const getUsersAPI = createAction('[User Action] getUsersAPI');
export const putUsersStore = createAction('[User Action] putUsersStore', props<{ users: Array<User> }>());
export const init = createAction('[User Action] init');
export const getUsersAPILoading = createAction('[User Action] getUsersAPILoading');
