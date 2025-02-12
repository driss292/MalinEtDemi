import { Component, OnInit } from '@angular/core';
import { FilterComponent } from '../../components/filter/filter.component';
import { MockProduct } from '../../core/models/mock-product.model';
import { MockProductService } from '../../core/services/mock-product.service';
import { CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FilterComponent, NgFor, CurrencyPipe],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent implements OnInit {
  products: MockProduct[] = [];
  filteredProducts: MockProduct[] = [];

  constructor(private readonly mockProductService: MockProductService) {}

  ngOnInit(): void {
    // Initialisation des produits depuis le service
    this.mockProductService
      .getProducts()
      .subscribe((products: MockProduct[]) => {
        this.products = products;
        this.filteredProducts = [...products]; // Initialiser filteredProducts avec tous les produits
      });
  }

  // Méthode appelée à chaque changement de filtre
  onFilterChange(filter: {
    category: string | null;
    room: string | null;
    searchText: string;
  }) {
    this.filteredProducts = this.mockProductService.filterProducts(
      this.products,
      filter
    );
  }
}
