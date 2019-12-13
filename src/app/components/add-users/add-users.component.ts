import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { UserActions } from '../../store/actions';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent {

  name = '';
  error: boolean;

  constructor(
    private store: Store<AppState>,
  ) { }

  saveData() {
    this.error = this.name.length === 0 ? true : false;
    if (!this.error) {
      this.store.dispatch(UserActions.addUser({ name: this.name }));
    }
  }

}
