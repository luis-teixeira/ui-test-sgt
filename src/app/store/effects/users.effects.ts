import { UsersService } from '../../services/users.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserActions } from '../actions';
import { FakeData } from '../reducers/user.reducer';

@Injectable()
export class UsersEffects {

  @Effect()
  loadUsers$ = this.actions$.pipe(
      ofType( UserActions.getUsersAPI  ),
      switchMap( () => this.usersService.getUsers()
          .pipe(
            map( (resp) => ({ type: UserActions.putUsersStore.type,  users: resp } )),
            // catchError(() => of({ type: UserActions.getUsersAPILoadingError.type }) )
            catchError(() => of({ type: UserActions.putUsersStore.type, users: FakeData}) )
          )
        )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}
}
