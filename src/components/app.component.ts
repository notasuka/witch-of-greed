import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '../html/app.component.html',
  styleUrls: ['../css/app.component.css']
})
export class AppComponent {
  title = 'Witch of Greed';
  menuShow = false;
  toggleNavbar() {
    this.menuShow =! this.menuShow;
  }
}
