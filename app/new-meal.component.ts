import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form form-group">
      <h3>Add new meal:</h3>
      <input placeholder="Name" class="input-lg form-control" #newName>
      <input placeholder="Details" class="input-lg form-control" #newDetails>
      <input placeholder="Calories" class="input-lg form-control" #newCalories>
      <button (click)="addMeal(newName, newDetails, newCalories)" class="btn btn-lg add-button">Add</button>
    </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement) {
    var newMeal = new Meal(userName.value, userDetails.value, parseInt(userCalories.value), 0);
    this.onSubmitNewMeal.emit(newMeal);
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}
