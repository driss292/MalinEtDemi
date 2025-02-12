import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockProduct } from '../models/mock-product.model';

@Injectable({
  providedIn: 'root',
})
export class MockProductService {
  private products: MockProduct[] = [
    new MockProduct(
      1,
      'Table',
      'Table en bois massif',
      190.99,
      'Tables',
      'Cuisine',
      ['assets/images/table.png']
    ),
    new MockProduct(
      2,
      'Canapé',
      'Canapé en cuir avec méridienne',
      299.99,
      'Canapés',
      'Salon',
      ['assets/images/canape.png']
    ),
    new MockProduct(
      3,
      'Fauteuil',
      'Fauteuil en tissu confortable',
      149.99,
      'Fauteuils',
      'Bureau',
      ['assets/images/fauteuil.png']
    ),
  ];

  constructor() {}

  // Simuler la récupération des produits
  getProducts(): Observable<MockProduct[]> {
    return of(this.products);
  }

  // Appliquer les filtres sur les produits
  filterProducts(
    products: MockProduct[],
    filter: { category: string | null; room: string | null }
  ): MockProduct[] {
    return products.filter(
      (product) =>
        (!filter.category || product.category === filter.category) &&
        (!filter.room || product.room === filter.room)
    );
  }
}
