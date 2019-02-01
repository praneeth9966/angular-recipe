import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>()
  recipes: Recipe[]=[
    new Recipe('Mutton Masala Degi Biryani','Mutton Masala Degi Biryani','https://i.ytimg.com/vi/8XZtEA5Fql4/maxresdefault.jpg'),
    new Recipe('Perfect Chicken Dum Biryani','Perfect Chicken Dum Biryani','https://i.ytimg.com/vi/vOBBZZd5F8c/hqdefault.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
