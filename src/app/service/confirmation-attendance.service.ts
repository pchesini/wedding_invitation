import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { Confirmation } from '../model/confirmation.model';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationAttendanceService {

  private apiUrl = 'https://your-api-endpoint.com/confirm'; // Cambia por la URL de tu API
  //loading: boolean;


  constructor(private http: HttpClient) { }
  
  confirmAttendance(confirmation : Confirmation): Observable<Confirmation> {
    return this.http.post<Confirmation>(this.apiUrl, confirmation).pipe(
      catchError(this.handleError)
    );
  }
  getConfirmed(): Observable<Confirmation[]> {
    const url = 'https://your-backend-api-url.com/confirmed-guests';
  
    return this.http.get<Confirmation[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }
  updateAttendance(confirmation: Confirmation): Observable<Confirmation> {
    const url = `${this.apiUrl}/${confirmation.id}`;  // Usa el id del objeto confirmation
    return this.http.put<Confirmation>(url, confirmation).pipe(
      catchError(this.handleError)
    );
  }
  cancelAttendance(id: string): Observable<Confirmation> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch<Confirmation>(url, { confirmationDate: null }).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error occurred:', error);
    return throwError(() => new Error('Ocurrio un problema, intente mas tarde'));
  }
}
