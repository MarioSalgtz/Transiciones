import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    this.isLoading = true;
    // Simular una solicitud de inicio de sesión
    setTimeout(() => {
      this.isLoading = false;
      if (this.email === '1' && this.password === '2') {
        this.router.navigate(['/dashboard']);
      } else {
        alert('Credenciales incorrectas');
      }
    }, 2000);
  }
}