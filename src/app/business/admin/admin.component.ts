import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
productos = [
  { nombre: 'Martillo', cantidad: 30, precio: 15.00 },
  { nombre: 'Taladro', cantidad: 20, precio: 75.00 },
  { nombre: 'Tornillo tipo A', cantidad: 200, precio: 0.10 },
  { nombre: 'Tornillo tipo B', cantidad: 150, precio: 0.15 },
  { nombre: 'Tornillo tipo C', cantidad: 100, precio: 0.20 },
  { nombre: 'Fibra óptica 10m', cantidad: 50, precio: 25.00 },
  { nombre: 'Fibra óptica 20m', cantidad: 30, precio: 45.00 },
  { nombre: 'Alicate', cantidad: 40, precio: 12.00 },
  { nombre: 'Destornillador', cantidad: 60, precio: 8.00 },
  { nombre: 'Llave inglesa', cantidad: 25, precio: 20.00 },
  { nombre: 'Cinta aislante', cantidad: 100, precio: 2.50 },
  { nombre: 'Multímetro', cantidad: 15, precio: 50.00 },
  { nombre: 'Cortadora de cables', cantidad: 35, precio: 18.00 },
  { nombre: 'Pistola de silicona', cantidad: 20, precio: 10.00 },
  { nombre: 'Broca para taladro', cantidad: 80, precio: 5.00 },
  { nombre: 'Nivel de burbuja', cantidad: 25, precio: 7.00 },
  { nombre: 'Cinta métrica', cantidad: 50, precio: 5.00 },
  { nombre: 'Guantes de seguridad', cantidad: 70, precio: 3.00 },
  { nombre: 'Casco de seguridad', cantidad: 30, precio: 25.00 },
  { nombre: 'Lámpara de trabajo', cantidad: 20, precio: 30.00 }
];
}
