import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = '/api/users';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<User[]>(this.API).pipe(first());
  }

  save(record: Partial<User>) {
    if(record.uuid) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<User>) {
    return this.httpClient.post<User>(this.API, record).pipe(first());
  }

  private update(record: Partial<User>) {
    return this.httpClient.put<User>(`${this.API}/${record.uuid}`, record).pipe(first());
  }

  find(username: string) {
    return this.httpClient.get<User>(`${this.API}/${username}`).pipe(first());
  }

  delete(user: User) {
    return this.httpClient.delete(`${this.API}/${user.username}`).pipe(first());
  }
}
