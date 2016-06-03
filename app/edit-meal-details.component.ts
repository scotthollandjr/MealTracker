import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="meal-form form-group">
      <h3>Edit Meal:</h3>
      <input [(ngModel)]="meal.name" class="col-sm-8 input-lg form-control"/>
      <input [(ngModel)]="meal.details" class="col-sm-8 input-lg form-control"/>
      <input [(ngModel)]="meal.calories" class="col-sm-8 input-lg form-control"/>
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
