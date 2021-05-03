import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    let body = {
      email: user.email,
      password: user.password,
    };
    return this.http.post('https://reqres.in/api/register', body);
  }
}
