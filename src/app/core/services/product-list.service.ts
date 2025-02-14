import { inject, Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import {
  ProductList,
  ProductListtApiResponse,
} from '../models/product-list.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private readonly apiUrl = environment.apiUrl;
  private readonly http: HttpClient = inject<HttpClient>(HttpClient);

  constructor() {}

  getProducts(): Observable<ProductList[]> {
    return this.http.get<ProductListtApiResponse[]>(this.apiUrl).pipe(
      map((response) => response.map(ProductList.fromApiResponse)), // Utilisation de la méthode statique
      catchError((error) => this.handleError(error))
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('Erreur lors de la récupération des produits :', error);
    return throwError(() => new Error('Impossible de récupérer les produits.'));
  }
}
