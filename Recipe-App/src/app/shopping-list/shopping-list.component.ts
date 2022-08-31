import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients-modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient(1, 'Kosher salt'),
    new Ingredient(1, 'pound spaghetti')
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient)
    console.log(this.ingredients);

  }

}
