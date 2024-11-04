import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export default class DashboardComponent {
  tableData = [
    { description: 'Instalación de Antenas 5G', price: '$1500', progress: '40%' },
    { description: 'Mantenimiento de Redes', price: '$800', progress: '60%' },
    { description: 'Actualización de Software', price: '$1200', progress: '50%' },
    { description: 'Expansión de Fibra Óptica', price: '$2000', progress: '30%' },
    { description: 'Consultoría en Telecomunicaciones', price: '$1000', progress: '80%' },
  ];
  
  projects = [
    { name: 'Project A - Telecom Infrastructure', completed: false },
    { name: 'Project B - 5G Network Expansion', completed: false },
    { name: 'Project C - Fiber Optic Installation', completed: false },
  ];

  newProjectName = '';

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
}