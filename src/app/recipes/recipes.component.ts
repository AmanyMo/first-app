import { Component, OnInit } from '@angular/core';
import{RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
