import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef
  @ViewChild('amountInput') amountInputRef: ElementRef
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){

  }

}
