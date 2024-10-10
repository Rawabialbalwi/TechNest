import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedCategory: string = 'All'; 

  updateCategory(category: string) {
    this.selectedCategory = category; 
  }
}
