import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipes.model';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe | undefined;

  constructor() {}

  ngOnInit(): void {}
}
