import { Component, ElementRef,  OnInit,  ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

import { Ingredient } from 'src/app/shared/ingredients-modal';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef
  @ViewChild('amountInput') amountInputRef: ElementRef

  constructor(private addIngred: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    let ingName = this.nameInputRef.nativeElement.value
    let ingAmount = this.amountInputRef.nativeElement.value
    let newIngredient = new Ingredient( ingAmount, ingName)
    this.addIngred.onIngredientAdded(newIngredient)
  }

}
