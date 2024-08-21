import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationAttendanceService } from '../service/confirmation-attendance.service';
import { Confirmation } from '../model/confirmation.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMapVisible = false;

  guestName = '';
  guestEmail = '';

  constructor(public modalService: NgbModal, private confirmationService: ConfirmationAttendanceService) {}

  toggleMap(): void {
    this.isMapVisible = !this.isMapVisible;
  }

  openModal(content: TemplateRef<any>): void {
    this.modalService.open(content);
  }

  submitForm(): void {
    const confirmation: Confirmation = {
       id: '',
      name: this.guestName,
      email: this.guestEmail,
      confirmationDate: new Date() // Se puede agregar si es necesario
      
     
    };

    this.confirmationService.confirmAttendance(confirmation).subscribe({
      next: (response) => {
        console.log('Confirmación recibida:', response);
        alert('¡Gracias por confirmar tu asistencia!');
        this.resetForm();
      },
      error: (error) => {
        console.error('Error al confirmar asistencia:', error);
        alert('Hubo un problema al enviar tu confirmación. Por favor, intenta de nuevo.');
      },
      complete: () => {
        console.log('Confirmación de asistencia completada.');
      }
    });
  }

  resetForm(): void {
    this.guestName = '';
    this.guestEmail = '';
  }

}
