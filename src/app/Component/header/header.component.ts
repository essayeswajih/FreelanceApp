import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ListOfRutes: any = [];
  isScrolled = false;

  constructor() {}

  ngOnInit() {
    this.ListOfRutes = [
      { "Route": "Login", "Name": "Se connecter" },
      { "Route": "Register", "Name": "S’inscrire" },
      { "Route": "Post", "Name": "Poster" }
    ];
    console.log(this.ListOfRutes);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
  this.isScrolled = window.scrollY > 0;
}

}
