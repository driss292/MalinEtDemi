import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // <-- Import de ReactiveFormsModule
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor], // Ajout de ReactiveFormsModule ici
  templateUrl: './filter.component.html',
  styles: ``,
})
export class FilterComponent {
  categories = ['Tables', 'Chaises', 'Canapés', 'Fauteuils'];
  rooms = ['Salon', 'Chambre', 'Bureau', 'Cuisine'];

  selectedCategory = new FormControl('all');
  selectedRoom = new FormControl('all');

  @Output() filterChanged = new EventEmitter<{
    category: string | null;
    room: string | null;
  }>();

  onFilterChange() {
    const category =
      this.selectedCategory.value === 'all'
        ? null
        : this.selectedCategory.value;
    const room =
      this.selectedRoom.value === 'all' ? null : this.selectedRoom.value;
    console.log('filtre : ', {
      category: this.selectedCategory.value, // Utilisation de .value ici
      room: this.selectedRoom.value,
    });
    this.filterChanged.emit({
      category,
      room,
    });
  }
}
