import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.styl']
})
export class ContactComponent {
  contacts = [
    { icon: 'fa fa-user', info: 'Ryusuke Lavalla' },
    { icon: 'fa fa-home', info: 'Brooklyn, New York'},
    { icon: 'fa fa-envelope', info: 'lavalla@protonmail.com'}
  ];

  constructor(private api: ApiService) { }

  onFormSubmit(contact: Contact) {
      this.api.postContact(contact)
        .subscribe(data => {});
  }

}
