import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredients-modal';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef
  @ViewChild('amountInput') amountInputRef: ElementRef
  @Output() ingredientAdded = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    let ingName = this.nameInputRef.nativeElement.value
    let ingAmount = this.amountInputRef.nativeElement.value
    let newIngredient = new Ingredient( ingAmount, ingName)
    this.ingredientAdded.emit(newIngredient)
    console.log(this.ingredientAdded);

  }

}
