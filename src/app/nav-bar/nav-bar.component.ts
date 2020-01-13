import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.styl']
})
export class NavBarComponent {

  navs = [
    {title: "HOME", icon: "home", url: "home"},
    {title: "ABOUT", icon: "person", url: "about"},
    {title: "SKILLS",icon: "code", url: "skills"},
    {title: "WORK", icon: "work", url: "work" },
    {title: "CONTACT", icon: "comment", url: "contact"}
  ]

  constructor() { }

}
