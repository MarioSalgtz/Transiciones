import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface StockItem {
  name: string;
  quantity: number;
  unitValue: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export default class DashboardComponent {
  tableData = [
    {
      description: 'Instalación de Antenas 5G',
      price: '$1500',
      progress: '40%',
    },
    { description: 'Mantenimiento de Redes', price: '$800', progress: '60%' },
    {
      description: 'Actualización de Software',
      price: '$1200',
      progress: '50%',
    },
    {
      description: 'Expansión de Fibra Óptica',
      price: '$2000',
      progress: '30%',
    },
    {
      description: 'Consultoría en Telecomunicaciones',
      price: '$1000',
      progress: '80%',
    },
  ];

  projects = [
    { name: 'Project A - Telecom Infrastructure', completed: false },
    { name: 'Project B - 5G Network Expansion', completed: false },
    { name: 'Project C - Fiber Optic Installation', completed: false },
  ];

  newProjectName = '';
  metros: number = 0;
  tipoInstalacion: string = 'postes';
  tipoSuelo: string = 'blando';
  zona: string = 'residencial';
  cotizacion: number | null = null;
  cotizaciones: { fecha: string; monto: number }[] = [];

  isStockModalOpen = false;
  isAddItemModalOpen = false;
  editingItem: StockItem | null = null;
  newItem: StockItem = { name: '', quantity: 0, unitValue: 0 };
  stockItems: StockItem[] = [
    { name: 'Cable de Fibra Óptica', quantity: 200, unitValue: 80 },
    { name: 'Empalmadora de Fibra Óptica', quantity: 5, unitValue: 2500 },
    { name: 'Peladora de Fibra Óptica', quantity: 10, unitValue: 45 },
    { name: 'Cortadora de Precisión', quantity: 5, unitValue: 500 },
    { name: 'Medidor de Potencia Óptica', quantity: 10, unitValue: 300 },
    { name: 'Fuente de Luz Láser', quantity: 10, unitValue: 250 },
    { name: 'OTDR (Reflectómetro Óptico)', quantity: 2, unitValue: 8000 },
    { name: 'Cables de Conexión (Patch Cords)', quantity: 100, unitValue: 20 },
    { name: 'Bandejas para Empalmes', quantity: 50, unitValue: 30 },
    { name: 'Distribuidores Ópticos (ODF)', quantity: 20, unitValue: 200 },
    { name: 'Conectores de Fibra Óptica', quantity: 500, unitValue: 5 },
    { name: 'Cinta Métrica de Fibra', quantity: 15, unitValue: 25 },
    { name: 'Identificador de Fibra Óptica', quantity: 5, unitValue: 300 },
    { name: 'Limpiadores de Fibra Óptica', quantity: 50, unitValue: 15 },
    {
      name: 'Capuchones de Protección para Fibras',
      quantity: 200,
      unitValue: 1,
    },
  ];

  constructor(private router: Router) {}

  navigateToAdmin() {
    this.router.navigate(['/admin']);
  }

  openProjectListModal() {
    const modal = document.getElementById('projectListModal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  closeProjectListModal() {
    const modal = document.getElementById('projectListModal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  openCotizarModal() {
    const modal = document.getElementById('cotizarModal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  closeCotizarModal() {
    const modal = document.getElementById('cotizarModal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  calcularCotizacion(): void {
    let precioPorMetro = 25; // Precio base por metro de fibra óptica

    // Ajustar precio según tipo de instalación
    if (this.tipoInstalacion === 'subterraneo') {
      precioPorMetro += 10;
    }

    // Ajustar precio según tipo de suelo
    if (this.tipoSuelo === 'duro') {
      precioPorMetro += 5;
    }

    // Ajustar precio según zona
    if (this.zona === 'comercial') {
      precioPorMetro += 15;
    }

    this.cotizacion = this.metros * precioPorMetro;
  }

  guardarCotizacion(): void {
    if (this.cotizacion !== null) {
      const fecha = new Date().toLocaleDateString();
      this.cotizaciones.push({ fecha, monto: this.cotizacion });
      this.closeCotizarModal();
    }
  }

  eliminarCotizacion(index: number): void {
    this.cotizaciones.splice(index, 1);
  }

  toggleProjectCompletion(index: number) {
    this.projects[index].completed = !this.projects[index].completed;
  }

  editProject(index: number, event: any) {
    this.projects[index].name = event.target.innerText;
  }

  deleteProject(index: number) {
    this.projects.splice(index, 1);
  }

  addProject() {
    if (this.newProjectName.trim()) {
      this.projects.push({ name: this.newProjectName, completed: false });
      this.newProjectName = '';
    }
  }

  openStockModal() {
    this.isStockModalOpen = true;
  }

  closeStockModal() {
    this.isStockModalOpen = false;
  }

  openAddItemModal() {
    this.isAddItemModalOpen = true;
  }

  closeAddItemModal() {
    this.isAddItemModalOpen = false;
  }

  addItem() {
    if (
      this.newItem.name &&
      this.newItem.quantity > 0 &&
      this.newItem.unitValue > 0
    ) {
      this.stockItems.push({ ...this.newItem });
      this.newItem = { name: '', quantity: 0, unitValue: 0 };
      this.closeAddItemModal();
    }
  }

  editItem(item: StockItem) {
    this.editingItem = item;
    // Lógica adicional para editar el elemento
  }

  deleteItem(item: StockItem) {
    const index = this.stockItems.indexOf(item);
    if (index > -1) {
      this.stockItems.splice(index, 1);
    }
  }
}
