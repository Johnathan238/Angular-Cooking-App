import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe, RECIPE_DATA } from '../recipe-list/recipe-modal'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes = RECIPE_DATA
  constructor() { }

  ngOnInit(): void {
    console.log(this.recipes);

  }

}
