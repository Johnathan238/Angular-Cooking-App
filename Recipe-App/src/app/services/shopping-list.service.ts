import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients-modal';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>()
  
    ingredients: Ingredient[] = [
    new Ingredient(1, 'Kosher salt'),
    new Ingredient(1, 'pound spaghetti')
  ]

  constructor() { }

    getIngredients(){
      return this.ingredients
    }

    onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient)
    console.log(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
