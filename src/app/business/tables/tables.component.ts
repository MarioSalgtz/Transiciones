import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';

interface Project {
  name: string;
  createdDate: string;
  status: string;
  report: string;
  description?: string;
  endDate?: string;
  projectName ?: string;
}

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export default class TablesComponent {
  showProjectPopup = false;
  showReportPopup = false;
  projectName: string = '';
  projectDescription: string = '';
  projectEndDate: Date = new Date();
  showCreateProjectPopup = false;
  selectedProject: Project | null = null;
  images: File[] = [];
  projects: Project[] = [
    { name: 'UDG', createdDate: '04/09/24', status: 'Pendiente', report: 'Por revisar' },
    { name: 'Proyecto X', createdDate: '05/10/24', status: 'Completado', report: 'Revisado' },
    // Add more projects as needed
  ];

  isEditing = false;
  reportContent = '';
  teamMembers = [
    'Nombre del integrante 1 - Cargo',
    'Nombre del integrante 2 - Cargo',
    'Nombre del integrante 3 - Cargo',
    'Nombre del integrante 4 - Cargo'
  ];

  openCreateProjectPopup() {
    this.showCreateProjectPopup = true;
  }

  closeCreateProjectPopup() {
    this.showCreateProjectPopup = false;
  }

  onFileChange(event: any): void {
    this.images = Array.from(event.target.files);
    console.log('Images loaded:', this.images);
  }

  async createProject(): Promise<void> {
    console.log('Creating project...');
    const newProject: Project = {
      name: this.projectName,
      createdDate: new Date().toLocaleDateString(),
      status: 'Pendiente',
      report: 'Por revisar',
      description: this.projectDescription,
      endDate: new Date(this.projectEndDate).toLocaleDateString() // Asegurarse de que sea un objeto Date
    };
    this.projects.push(newProject);

    // Generar el PDF con las imágenes
    await this.generatePDF();

    // Cerrar el modal
    this.closeCreateProjectPopup();
  }

  async generatePDF(): Promise<void> {
    console.log('Generating PDF...');
    const doc = new jsPDF();
    const date = new Date().toLocaleString();
    doc.text(`Transiciones Integrales`, 10, 10);
    doc.text(`Fecha: ${date}`, 10, 20);

    let y = 30;
    for (const file of this.images) {
      const imgData = await this.fileToBase64(file);
      console.log('Adding image to PDF:', imgData);
      doc.addImage(imgData, 'JPEG', 10, y, 180, 120); // Ajusta el tamaño según sea necesario
      y += 130;
      if (y > 280) { // Nueva página si se pasa del límite
        doc.addPage();
        y = 30;
      }
    }

    doc.save('reporte.pdf');
  }

  fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }

  openProjectPopup(project: Project) {
    this.selectedProject = project;
    this.showProjectPopup = true;
  }

  closeProjectPopup() {
    this.showProjectPopup = false;
    this.selectedProject = null;
  }

  openReportPopup(project: Project) {
    this.selectedProject = project;
    this.reportContent = project.report;
    this.showReportPopup = true;
  }

  closeReportPopup() {
    this.showReportPopup = false;
    this.selectedProject = null;
    this.isEditing = false;
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveReport() {
    if (this.selectedProject) {
      this.selectedProject.report = this.reportContent;
      this.isEditing = false;
      // Mostrar una palomita por un segundo
      alert('Reporte guardado');
    }
  }

  async downloadPDF() {
    const doc = new jsPDF();
    doc.text('Reporte de Cuadrilla de Telecomunicaciones', 10, 10);
    doc.text(`Fecha de Creación: ${this.selectedProject?.createdDate}`, 10, 20);
    doc.text('1. Introducción', 10, 30);
    doc.text(this.reportContent, 10, 40);
    doc.text('2. Composición de la Cuadrilla', 10, 50);
    this.teamMembers.forEach((member, index) => {
      doc.text(`${index + 1}. ${member}`, 10, 60 + (index * 10));
    });
    doc.save('reporte.pdf');
  }

  uploadImages() {
    // Implement image upload logic here
    console.log('Uploading images...');
  }
}