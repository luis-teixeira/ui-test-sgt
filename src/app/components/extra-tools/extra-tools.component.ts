import { User } from './../../models/user';
import { getEditAllUsers, getUsers } from './../../store/selectors/user.selectors';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { UserActions } from '../../store/actions';

@Component({
  selector: 'app-extra-tools',
  templateUrl: './extra-tools.component.html',
  styleUrls: ['./extra-tools.component.scss']
})
export class ExtraToolsComponent {

  private editAll$: Observable<boolean>;
  private getUsers$: Observable<Array<User>>;

  constructor(
    private store: Store<AppState>,
  ) {
    this.editAll$ = this.store.pipe(select(getEditAllUsers));
    this.getUsers$ = this.store.pipe(select(getUsers));
  }

  deleteAllData() {
    this.store.dispatch(UserActions.deleteAllUser());
  }

  editAllUser() {
    this.store.dispatch(UserActions.editAllUser());
  }

  saveAllData() {
    this.store.dispatch(UserActions.putALLUser());
  }

}
