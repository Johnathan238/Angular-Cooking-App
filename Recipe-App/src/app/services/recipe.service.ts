import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe-book/recipe-list/recipe-modal';
import { Ingredient } from '../shared/ingredients-modal';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()


  RECIPE_DATA: Recipe[] = [
  {
  name: "Healthy Pasta with Spicy Crab",
  description: " Crab is high in protein but low in fat, so it's a great balance to the carbs.",
  imagePath: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/16/3/FNM_010116-Healthy-Pasta-with-Spicy-Crab-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1450481165402.jpeg",
  ingredients: [
    new Ingredient(1, 'Fettuccine')
  ],
  }
]

  constructor(private shoppingService: ShoppingListService) { }

  getRecipe(){
    return this.RECIPE_DATA.slice()
  }

  addIngredientsToshoppingList(ingredients: Ingredient[]){
    this.shoppingService.addIngredients(ingredients)
  }
}
