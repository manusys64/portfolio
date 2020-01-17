import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.styl']
})
export class NavBarComponent {
  link = {icon: "fa fa-linkedin", url: "https://www.linkedin.com/in/ryusukelavalla/"}
  navs = [
    {title: "HOME", icon: "fa fa-home", url: "home"},
    {title: "ABOUT", icon: "fa fa-user", url: "about"},
    {title: "SKILLS",icon: "fa fa-code", url: "skills"},
    {title: "WORK", icon: "fa fa-briefcase", url: "work" },
    {title: "CONTACT", icon: "fa fa-comments", url: "contact"}
  ]

  constructor() { }

}
