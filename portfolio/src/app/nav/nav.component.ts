import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  navItems = [
    { path: '/about', label: 'About', icon: 'fas fa-user' },
    { path: '/projects', label: 'Projects', icon: 'fas fa-code' },
    { path: '/contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];
}