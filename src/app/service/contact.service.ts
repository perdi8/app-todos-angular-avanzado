import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { Icontact } from '../models/contact/icontact.interface';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user/user.model';
import { Contact } from '../models/contact/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contactstUrl = 'https://reqres.in/api/users';
  private isContactIn: boolean = false;

  constructor(private http: HttpClient) {}

  getAllContacts(): Observable<Object[]> {
    return this.http
      .get<object[]>(this.contactstUrl)
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    console.log(err.message);

    return Observable.throw(err.message);
  }

  updateContact(contact: any): Observable<any> {
    let body = {
      id: contact.id,
      first_name: contact.first_name,
      last_name: contact.last_name,
      email: contact.email,
      // phone: contact.phone,
      // avatar: contact.avatar,
    };
    return this.http.put(`https://reqres.in/api/users/${body.id}`, body);
  }

  // Setter and Getter of LoggedIn
  get contactIn() {
    return this.isContactIn;
  }

  setContactIn(value: boolean) {
    this.isContactIn = value;
  }
}
