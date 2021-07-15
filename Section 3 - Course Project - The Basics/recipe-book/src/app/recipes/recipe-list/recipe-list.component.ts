import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
