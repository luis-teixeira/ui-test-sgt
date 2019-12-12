import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestResponse } from '../models/restResponse';

@Injectable()
export class UsersService {

  baseUrl = 'https://uitest.free.beeceptor.com/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<RestResponse<User>>  {

    return this.http.get<RestResponse<User>>(this.baseUrl + 'usernames');
  }

}
