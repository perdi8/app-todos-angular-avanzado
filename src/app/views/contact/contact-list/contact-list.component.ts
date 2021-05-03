import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/service/contact.service';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contactList: Contact[] = [];
  id: number = 1;
  listSubscription: Subscription = new Subscription();
  errorMsg: any;
  displayedColumns: string[] = [
    'avatar',
    'id',
    'name',
    'lastname',
    'email',
    'detail',
  ];
  dataSource: Contact[] = [];
  @Output() contactsEmitter: EventEmitter<any[]> = new EventEmitter();

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.listSubscription = this.contactService.getAllContacts().subscribe(
      (result: any) => {
        this.contactList = result.data;
        this.dataSource = this.contactList;
        this.contactsEmitter.emit(this.contactList);
      },
      (error) => {
        console.error(`error caught in component Contact URL: ${error}`);
      }
    );
  }

  valueIndex(i: number) {
    this.id = i;
  }

  onNavigate() {
    this.router.navigate([`/contacts/${this.id + 1}`], {
      state: {
        data: this.contactList[this.id],
      },
    });
  }

  ngOnDestroy() {
    // Unsubscribe of all subscriptions
    this.listSubscription.unsubscribe();
  }
}
