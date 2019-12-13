import { getUsers } from './../../store/selectors/user.selectors';
import { Store, select } from '@ngrx/store';
import { User } from './../../models/user';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AppState } from './../../store/reducers';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private users$: Observable<Array<User>>;
  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.users$ = this.store.pipe(select(getUsers));
  }

}
