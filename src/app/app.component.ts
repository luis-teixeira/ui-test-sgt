
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/reducers';
import { UserActions } from './store/actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-test-sgt';

  constructor(
    private store: Store<AppState>,
  ) {
    this.store.dispatch(UserActions.getUsersAPILoading());
    this.store.dispatch(UserActions.getUsersAPI());
  }
}
