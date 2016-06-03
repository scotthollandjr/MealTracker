import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div>
      <hr>
      <h3>{{ meal.name }} - ({{ meal.calories }} calories)</h3>
      <h4>"{{ meal.details }}"</h4>
    </div>
  `
})
export class MealComponent {
  public meal: Meal;
}
