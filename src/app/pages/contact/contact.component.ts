import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.styl']
})
export class ContactComponent {
  contacts = [
    { icon: "fa fa-user", info: "Ryusuke Lavalla" },
    { icon: "fa fa-home", info: "Brooklyn, New York"},
    { icon: "fa fa-envelope", info: "lavalla@protonmail.com"}
  ]

  constructor() { }

}
