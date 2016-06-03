import { Component, EventEmitter } from 'angular2/core'

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

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent],
  template: `
    <meal-display *ngFor="#currentMeal of mealList"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
}

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
      new Meal("Nachos", "So delish", 665, 0),
      new Meal("Chicken Fried Steak", "Extra gravy", 750, 1),
      new Meal("Bacon Bleu Burger", "Side of seasoned tots", 860, 2),
      new Meal("Chips and Salsa", "Tomatillo salsa", 240, 3)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}

export class Meal {
  constructor(public name: string, public details: string, public calories: number, public id: number) {

  }
}
