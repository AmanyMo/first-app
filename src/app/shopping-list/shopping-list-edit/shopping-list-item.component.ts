import {
  Component,
  ElementRef,
  Input,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/models/ingredients.model';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
})
export class ShoppingListEditComponent {
  @ViewChild('inputName') inputNameRef?: ElementRef;
  @ViewChild('inputAmount') inputAmountRef?: ElementRef;
  @Output() ingredientsAdded = new EventEmitter<Ingredient>();
  onAddItem() {
    const newIngredient = new Ingredient(
      this.inputNameRef?.nativeElement.value,
      this.inputAmountRef?.nativeElement.value
    );
    this.ingredientsAdded.emit(newIngredient);
  }
}
