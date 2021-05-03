import { Icontact } from './icontact.interface';

export class Contact implements Icontact {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  avatar: string;

  constructor(
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    avatar: string
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone = phone;
    this.avatar = avatar;
  }
}
