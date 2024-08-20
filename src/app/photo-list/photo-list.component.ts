import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent {
  photos = [
    { url: 'assets/photo1.jpg', description: 'Descripción de la foto 1' },
    { url: 'assets/photo2.jpg', description: 'Descripción de la foto 2' },
    { url: 'assets/photo3.jpg', description: 'Descripción de la foto 3' },
    // Agrega más fotos aquí
  ];
}
