import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMapVisible = false;

  guestName = '';
  guestEmail = '';

  constructor(public modalService: NgbModal) {}

  toggleMap(): void {
    this.isMapVisible = !this.isMapVisible;
  }

  openModal(content: TemplateRef<any>): void {
    this.modalService.open(content);
  }

  submitForm(): void {
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
    console.log('Confirmación recibida:', this.guestName, this.guestEmail);

    // Resetea el formulario y muestra un mensaje de agradecimiento
    this.guestName = '';
    this.guestEmail = '';
    alert('¡Gracias por confirmar tu asistencia!');

    // Cierra el modal
    this.modalService.dismissAll();
  }
}
