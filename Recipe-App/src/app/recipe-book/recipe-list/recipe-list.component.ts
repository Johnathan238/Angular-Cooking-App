import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe-list/recipe-modal'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[]

  constructor(private recipeList: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeList.getRecipe()
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
    console.log(recipe);

  }
}
