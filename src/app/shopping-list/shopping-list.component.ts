import { Component, OnInit, Output } from '@angular/core';
import { Ingredient } from '../models/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 5),
    new Ingredient('Apples', 7),
  ];
  constructor() {}

  ngOnInit(): void {}

  onIngredientAdded(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
