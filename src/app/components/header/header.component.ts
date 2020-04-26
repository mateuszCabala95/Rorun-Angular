import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  rorunLogo = 'assets/home/rorun_logo.jpg'
  fbLogo = 'assets/home/Facebook_Icon.jpg'


  isMobileMenuOpen = false
  onToggleMobileMenu = () => {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

}
