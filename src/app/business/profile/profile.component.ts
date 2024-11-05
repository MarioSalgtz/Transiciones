import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Cliente {
  rol: string;
  empresa: string;
  numero: string;
  correo: string;
}

interface Proveedor {
  nombre: string;
  numero: string;
  correo: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export default class ProfileComponent {
  clientes: Cliente[] = [
    { rol: 'Gerente de Operaciones', empresa: 'Telecomunicaciones MX', numero: '5551234567', correo: 'gerente.operaciones@telecommx.com' },
    { rol: 'Director de Ventas', empresa: 'Telecomunicaciones MX', numero: '5559876543', correo: 'director.ventas@telecommx.com' },
    { rol: 'CEO', empresa: 'Telecomunicaciones MX', numero: '5555555555', correo: 'ceo@telecommx.com' }
  ];

  proveedores: Proveedor[] = [
    { nombre: 'Proveedor 1', numero: '5551234567', correo: 'proveedor1@correo.com' },
    { nombre: 'Proveedor 2', numero: '5559876543', correo: 'proveedor2@correo.com' }
  ];

  showClienteModal = false;
  showProveedorModal = false;
  editingCliente = false;
  editingProveedor = false;
  currentCliente: Cliente = { rol: '', empresa: '', numero: '', correo: '' };
  currentProveedor: Proveedor = { nombre: '', numero: '', correo: '' };

  openClienteModal(cliente?: Cliente): void {
    this.editingCliente = !!cliente;
    this.currentCliente = cliente ? { ...cliente } : { rol: '', empresa: '', numero: '', correo: '' };
    this.showClienteModal = true;
  }

  closeClienteModal(): void {
    this.showClienteModal = false;
  }

  saveCliente(): void {
    if (this.editingCliente) {
      const index = this.clientes.findIndex(c => c.correo === this.currentCliente.correo);
      if (index !== -1) {
        this.clientes[index] = this.currentCliente;
      }
    } else {
      this.clientes.push(this.currentCliente);
    }
    this.closeClienteModal();
  }

  openProveedorModal(proveedor?: Proveedor): void {
    this.editingProveedor = !!proveedor;
    this.currentProveedor = proveedor ? { ...proveedor } : { nombre: '', numero: '', correo: '' };
    this.showProveedorModal = true;
  }

  closeProveedorModal(): void {
    this.showProveedorModal = false;
  }

  saveProveedor(): void {
    if (this.editingProveedor) {
      const index = this.proveedores.findIndex(p => p.correo === this.currentProveedor.correo);
      if (index !== -1) {
        this.proveedores[index] = this.currentProveedor;
      }
    } else {
      this.proveedores.push(this.currentProveedor);
    }
    this.closeProveedorModal();
  }
}