import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

import { Recipe } from '../recipe-list/recipe-modal';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe
  @Output() featureSelected = new EventEmitter<string>()

  onSelect(feature: string){
    this.featureSelected.emit(feature)
  }


  constructor(private shoppingList: RecipeService) { }

  ngOnInit(): void {
    console.log(this.recipe);
  }

  shoppingIngredients(){
    this.shoppingList.addIngredientsToshoppingList(this.recipe.ingredients)
  }
}
