import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker!</h1>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      // new Meal("Nachos", "So delish", 665, 0),
      // new Meal("Chicken Fried Steak", "Extra gravy", 750, 1),
      // new Meal("Bacon Bleu Burger", "Side of seasoned tots", 860, 2),
      // new Meal("Chips and Salsa", "Tomatillo salsa", 240, 3)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
