import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  toggleMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {

    this.toggleMenu = !this.toggleMenu;
    console.log(this.toggleMenu);
    return this.toggleMenu;

  }

}
