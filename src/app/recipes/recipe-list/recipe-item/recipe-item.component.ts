import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipes.model';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe = new Recipe('', '', '');
  @Output() recipeSelected = new EventEmitter<void>();
  onSelected() {
    this.recipeSelected.emit();
  }
}
