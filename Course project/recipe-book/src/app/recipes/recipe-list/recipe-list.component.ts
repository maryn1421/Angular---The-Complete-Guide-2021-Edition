import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   recipes: Recipe[] = [
     new Recipe("A test recipe", "This is simply a test recipe", "https://bakeitwithlove.com/wp-content/uploads/2017/04/Panda-Express-Shanghai-Angus-Steak-lg-sq.jpg"),
     new Recipe("A test recipe", "This is simply a test recipe", "https://bakeitwithlove.com/wp-content/uploads/2017/04/Panda-Express-Shanghai-Angus-Steak-lg-sq.jpg")

   ];
   @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe)
  }

}
