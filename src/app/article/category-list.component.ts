import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { Category } from './category';
 
@Component({
  selector: 'categoryDropDown',
  template:` 
  <label for="category">Category:</label>
<select [(ngModel)]="value">
  <option *ngFor="let category of categories" value = {{category.name}}>
     {{category.name}} 
  </option>
</select>`
})
export class CategoryListComponent {
  categories = [
     new Category(1, 'News' ),
     new Category(2, 'Jokes' ),
     new Category(3, 'Stories' ),
     new Category(4, 'Art')
  ];
}