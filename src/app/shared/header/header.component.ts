import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {
  isMenuOpen = false;
  logoPath = './assets/images/fox.png'; // Définition du chemin vers le logo

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
