import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationAttendanceService {

  private apiUrl = 'https://your-api-endpoint.com/confirm'; // Cambia por la URL de tu API
  //loading: boolean;


  constructor(private http: HttpClient) { }
  
  confirmAttendance(guestName: string, guestEmail: string): Observable<any> {
   // this.loading = true; // Indicador de carga
    const body = { name: guestName, email: guestEmail };
    return this.http.post(this.apiUrl, body).pipe(
     // finalize(() => this.loading = false), // Detener la carga al finalizar
      catchError(this.handleError));
  }
  getConfirmed(): Observable<any[]> {
    const url = 'https://your-backend-api-url.com/confirmed-guests';
  
    return this.http.get<any[]>(url).pipe(
      catchError(this.handleError)
    );
  }
  updateAttendance(id: string, name: string, email: string): Observable<any> {
    const url = `https://your-backend-api-url.com/confirm-attendance/${id}`;
    const body = { name, email };
  
    return this.http.put(url, body).pipe(
      catchError(this.handleError)
    );
  }
  cancelAttendance(id: string): Observable<any> {
    const url = `https://your-backend-api-url.com/confirm-attendance/${id}`;
    const body = { confirmationDate: null };
  
    return this.http.put(url, body).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error occurred:', error);
    return throwError(() => new Error('Ocurrio un problema, intente mas tarde'));
  }
}
