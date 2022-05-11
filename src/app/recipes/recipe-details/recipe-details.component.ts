import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipes.model';

@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: [],
})
export class RecipeDetailsComponent {
  @Input() recipe: Recipe = new Recipe('', '', '');
}
