import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe-list/recipe-modal'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipes: Recipe[] = [
    new Recipe(
      "Healthy Pasta with Spicy Crab",
      "Crab is high in protein but low in fat, so it's a great balance to the carbs.",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/16/3/FNM_010116-Healthy-Pasta-with-Spicy-Crab-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1450481165402.jpeg"
  )
]
  constructor() { }

  ngOnInit(): void {
  }

}
