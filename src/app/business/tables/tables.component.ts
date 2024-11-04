import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  styleUrl: './tables.component.scss'
})
export default class TablesComponent {
  showProjectPopup = false;
  showReportPopup = false;
  projectName: string = '';
  projectDescription: string = '';
  projectEndDate: Date = new Date();
  showCreateProjectPopup = false;
  selectedProject: Project | null = null;
  projects: Project[] = [
    { name: 'UDG', createdDate: '04/09/24', status: 'Pendiente', report: 'Por revisar' },
    { name: 'Proyecto X', createdDate: '05/10/24', status: 'Completado', report: 'Revisado' },
    // Add more projects as needed
  ];

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
    this.showReportPopup = true;
  }

  closeReportPopup() {
    this.showReportPopup = false;
    this.selectedProject = null;
  }

  uploadImages() {
    // Implement image upload logic here
    console.log('Uploading images...');
  }

  openCreateProjectPopup(project: Project) {
    this.showCreateProjectPopup = true;
  }

  closeCreateProjectPopup() {
    this.showCreateProjectPopup = false;
  }
  
  createProject(name: string, description: string, endDate: Date) {
      const newProject: Project = {
      name,
      createdDate: new Date().toLocaleDateString(),
      status: 'Pendiente',
      report: 'Por revisar',
      description,
      endDate: endDate.toLocaleDateString()
    };
    this.projects.push(newProject);
    this.closeCreateProjectPopup();
  }
}