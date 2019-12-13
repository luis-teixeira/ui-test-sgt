import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../store/reducers';
import { UserActions } from './../../store/actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() userData;
  @Input() id;

  name: string;

  constructor(
    private store: Store<AppState>,
  ) { }

  saveData(i) {
    this.store.dispatch(UserActions.putUser({ i, name: this.name }));
  }

  deleteUser(i) {
    this.store.dispatch(UserActions.deleteUser({ i }));
  }

  editUser(i) {
    this.store.dispatch(UserActions.editUser({ i }));
  }

  ngOnInit() {
    this.name = this.userData.name;
  }

}
