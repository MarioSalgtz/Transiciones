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
  modalVisible = false;
  modalTitle = '';
  modalContent = '';

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
  ];

  personal = [
    { nombre: 'Juan Pérez', cargo: 'Gerente', salario: 50000, edad: 45, direccion: 'Calle Falsa 123' },
    { nombre: 'Ana Gómez', cargo: 'Secretaria', salario: 25000, edad: 30, direccion: 'Avenida Siempre Viva 742' },
    // Añadir más empleados aquí
  ];

  equipo = [
    { nombre: 'Camioneta', modelo: 'Ford F-150', responsable: 'Carlos López', estatus: 'Disponible' },
    { nombre: 'Bobcat', modelo: 'S650', responsable: 'Luis Martínez', estatus: 'Ocupada' },
    // Añadir más equipo aquí
  ];

  transacciones = [
    { id: 1, fecha: '2023-10-01', cantidad: 1000, monto: 15000 },
    { id: 2, fecha: '2023-10-02', cantidad: 500, monto: 7500 },
    // Añadir más transacciones aquí
  ];

  totalCuenta = 22500;

  openModal(title: string, content: string) {
    this.modalTitle = title;
    this.modalContent = content;
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }

  verDetallesPersonal() {
    let content = `
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Nombre</th>
            <th class="py-2 px-4 border-b">Cargo</th>
            <th class="py-2 px-4 border-b">Salario</th>
            <th class="py-2 px-4 border-b">Edad</th>
            <th class="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>`;
    this.personal.forEach(persona => {
      content += `
        <tr>
          <td class="py-2 px-4 border-b">${persona.nombre}</td>
          <td class="py-2 px-4 border-b">${persona.cargo}</td>
          <td class="py-2 px-4 border-b">${persona.salario}</td>
          <td class="py-2 px-4 border-b">${persona.edad}</td>
          <td class="py-2 px-4 border-b">
            <button class="bg-red-500 text-white px-2 py-1 rounded" (click)="verDetallesTrabajador(${persona})">"Proximamente"</button>
          </td>
        </tr>`;
    });
    content += `
        </tbody>
      </table>`;
    this.openModal('Detalles del Personal', content);
  }

  verDetallesTrabajador(persona: any) {
    const content = `
      <p>Nombre: ${persona.nombre}</p>
      <p>Cargo: ${persona.cargo}</p>
      <p>Salario: ${persona.salario}</p>
      <p>Edad: ${persona.edad}</p>
      <p>Dirección: ${persona.direccion}</p>`;
    this.openModal('Detalles del Trabajador', content);
  }

  verDetallesEquipo() {
    let content = `
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Nombre</th>
            <th class="py-2 px-4 border-b">Modelo</th>
            <th class="py-2 px-4 border-b">Responsable</th>
            <th class="py-2 px-4 border-b">Estatus</th>
          </tr>
        </thead>
        <tbody>`;
    this.equipo.forEach(equipo => {
      content += `
        <tr>
          <td class="py-2 px-4 border-b">${equipo.nombre}</td>
          <td class="py-2 px-4 border-b">${equipo.modelo}</td>
          <td class="py-2 px-4 border-b">${equipo.responsable}</td>
          <td class="py-2 px-4 border-b">${equipo.estatus}</td>
        </tr>`;
    });
    content += `
        </tbody>
      </table>`;
    this.openModal('Detalles del Equipo', content);
  }

  verDetallesTransacciones() {
    let content = `
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">ID</th>
            <th class="py-2 px-4 border-b">Fecha</th>
            <th class="py-2 px-4 border-b">Cantidad</th>
            <th class="py-2 px-4 border-b">Monto</th>
          </tr>
        </thead>
        <tbody>`;
    this.transacciones.forEach(transaccion => {
      content += `
        <tr>
          <td class="py-2 px-4 border-b">${transaccion.id}</td>
          <td class="py-2 px-4 border-b">${transaccion.fecha}</td>
          <td class="py-2 px-4 border-b">${transaccion.cantidad}</td>
          <td class="py-2 px-4 border-b">${transaccion.monto}</td>
        </tr>`;
    });
    content += `
        </tbody>
      </table>
      <p class="mt-4">Total en cuenta: ${this.totalCuenta}</p>`;
    this.openModal('Detalles de Transacciones', content);
  }
}