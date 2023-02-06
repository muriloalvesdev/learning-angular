import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { User } from './../model/user';
import { UserService } from './../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {

  constructor(private service: UserService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<User> {
    if (route.params && route.params['username']) {
      return this.service.find(route.params['username']);
    }

    return of({ uuid: '', full_name: '', username: '', status: '', birth_date: ''})
  }
}
