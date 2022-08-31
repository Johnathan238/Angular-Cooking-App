import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe-modal';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe

  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedRecipe);

  }

}
