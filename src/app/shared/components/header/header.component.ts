import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  currentPage: string = '';
  pageTitle: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updatePageInfo();
    });

    // Inicializar la información de la página
    this.updatePageInfo();
  }

  private updatePageInfo() {
    const currentRoute = this.router.url.split('/').pop() || 'Inicio';
    this.currentPage = currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1);
    this.pageTitle = this.getPageTitle(currentRoute);
  }

  private getPageTitle(route: string): string {
    // Aquí puedes definir títulos personalizados para cada ruta
    const titles: { [key: string]: string } = {
      'dashboard': 'Dashboard',
      'tables': 'Reportes',
      'profile': 'Directorio',
      'admin': 'Administración'
    };
    return titles[route.toLowerCase()] || this.currentPage;
  }
}