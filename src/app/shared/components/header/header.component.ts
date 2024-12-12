import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentPage: string = '';
  pageTitle: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updatePageInfo();
      });

    // Inicializar la información de la página
    this.updatePageInfo();
  }

  toggleMenu() {
    const menuButton = document.getElementById('menu-button');
    const sidebar = document.querySelector('aside') as HTMLElement;
    if (menuButton && sidebar) {
      menuButton.classList.toggle('active');
      sidebar.style.display =
        sidebar.style.display === 'block' ? 'none' : 'block';
    }
  }

  private updatePageInfo() {
    // Lógica para actualizar la información de la página
  }
}
