import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe-modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipes : Recipe


  constructor() {

  }

  ngOnInit(): void {
    console.log(this.recipes.description);
  }

}
