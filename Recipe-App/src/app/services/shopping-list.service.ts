import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients-modal';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
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
}
