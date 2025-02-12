import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

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

  selectedCategory = new FormControl('all');
  selectedRoom = new FormControl('all');
  searchText = new FormControl('');

  @Output() filterChanged = new EventEmitter<{
    category: string | null;
    room: string | null;
    searchText: string;
  }>();

  private readonly searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((searchText) => {
        this.emitFilterChange(searchText);
      });
  }

  onSearchChange() {
    this.searchSubject.next(this.searchText.value ?? '');
  }

  onFilterChange() {
    this.emitFilterChange(this.searchText.value ?? '');
  }

  private emitFilterChange(searchText: string) {
    const category =
      this.selectedCategory.value === 'all'
        ? null
        : this.selectedCategory.value;
    const room =
      this.selectedRoom.value === 'all' ? null : this.selectedRoom.value;

    this.filterChanged.emit({ category, room, searchText });
  }
}
