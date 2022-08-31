import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe, RECIPE_DATA } from '../recipe-list/recipe-modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipes: Recipe
  @Output() recipeSelected = new EventEmitter<any>()

  constructor() {
  }

  ngOnInit() {
    console.log(this.recipes);
  }

  onSelected(){
    this.recipeSelected.emit()
    console.log(this.recipeSelected);

  }
}
