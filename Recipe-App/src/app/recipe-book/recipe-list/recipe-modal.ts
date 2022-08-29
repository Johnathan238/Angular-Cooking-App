import {Component} from '@angular/core';


export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  // constructor(name: string, description: string, imagePath: string) {
  //   this.name = name
  //   this.description = description
  //   this.imagePath = imagePath
  // }
}

export const RECIPE_DATA: Recipe[] = [
  {
  name: "Healthy Pasta with Spicy Crab",
  description: " Crab is high in protein but low in fat, so it's a great balance to the carbs.",
  imagePath: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/16/3/FNM_010116-Healthy-Pasta-with-Spicy-Crab-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1450481165402.jpeg"
  }
]


