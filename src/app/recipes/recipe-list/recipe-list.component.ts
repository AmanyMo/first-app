import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { Recipe } from 'src/app/models/recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Pizza test',
      'https://www.google.com/search?q=recipe&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwjtp9TA_tH3AhW7rmoFHcYWDwYQ_AUoAXoECAEQAw&biw=1366&bih=625&dpr=1#imgrc=N00YgSereS9wSM'
    ),
    new Recipe(
      'A Test recipe',
      'tessst',
      'file:///C:/Users/EXPERTS/Documents/Projects/Angular/first%20app/first-app/src/images/re1.png'
    ),
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipeElement: Recipe) {
    console.log(recipeElement);
    this.recipeSelected.emit(recipeElement);
  }
}
