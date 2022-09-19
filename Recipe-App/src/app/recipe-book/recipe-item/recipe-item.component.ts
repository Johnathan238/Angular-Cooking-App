import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe-list/recipe-modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipes: Recipe


  constructor(private recipeSelected: RecipeService) {
  }

  ngOnInit() {
    console.log(this.recipes);
  }

  onSelected(){
    this.recipeSelected.recipeSelected.emit(this.recipes)
  }
}
