import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories = ['All', 'Appliances in the house', 'Tools & Hardware', 'Home & Kitchen'];

  @Output() categorySelected = new EventEmitter<string>();  

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}
