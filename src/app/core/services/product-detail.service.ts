import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  private readonly apiUrl = environment.apiUrl;
  private readonly http: HttpClient = inject<HttpClient>(HttpClient);

  constructor() {}

  getProductDetail(id: number): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/${id}`)
      .pipe(catchError((error) => this.handleError(error)));
  }

  private handleError(error: any): Observable<never> {
    console.error(
      `Erreur lors de la récupération du produit (ID : ${error.id}) :`,
      error
    );
    return throwError(
      () => new Error(`Impossible de récupérer le produit: ${error.id}.`)
    );
  }
}
