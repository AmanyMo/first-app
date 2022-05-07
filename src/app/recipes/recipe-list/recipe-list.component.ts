import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test recipe',
      'tessst',
      'https://www.shutterstock.com/image-photo/avocado-quinoa-roasted-sweet-potato-spinach-753380965' )
  ,
      new Recipe(
        'A Test recipe',
        'tessst',
        'file:///C:/Users/EXPERTS/Documents/Projects/Angular/first%20app/first-app/src/images/re1.png' )
      ];
  constructor() {}

  ngOnInit(): void {}
}
