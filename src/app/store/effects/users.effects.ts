import { RestResponse } from './../../models/restResponse';
import { User } from './../../models/user';
import { UsersService } from '../../services/users.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { UserActions } from '../actions';


@Injectable()
export class UsersEffects {

  @Effect()
  loadUsers$ = this.actions$.pipe(
      ofType( UserActions.getUsersAPI  ),
      switchMap( () => this.usersService.getUsers()
          .pipe(
            map( (resp) => ({ type: UserActions.putUsersStore.type,  users: resp } )),
            catchError(() => EMPTY)
          )
        )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}
}
