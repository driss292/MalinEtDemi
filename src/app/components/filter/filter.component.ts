import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgFor], // Ajout de ReactiveFormsModule ici
  templateUrl: './filter.component.html',
  styles: ``,
})
export class FilterComponent {
  categories = ['Tables', 'Chaises', 'Canapés', 'Fauteuils'];
  rooms = ['Salon', 'Chambre', 'Bureau', 'Cuisine'];
  searchText: string = '';

  selectedCategory = new FormControl('all');
  selectedRoom = new FormControl('all');

  @Output() filterChanged = new EventEmitter<{
    category: string | null;
    room: string | null;
    searchText: string;
  }>();

  onFilterChange() {
    const category =
      this.selectedCategory.value === 'all'
        ? null
        : this.selectedCategory.value;
    const room =
      this.selectedRoom.value === 'all' ? null : this.selectedRoom.value;

    this.filterChanged.emit({
      category,
      room,
      searchText: this.searchText,
    });
  }
}
