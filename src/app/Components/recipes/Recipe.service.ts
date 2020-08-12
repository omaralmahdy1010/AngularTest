import { Recipe } from "./Recipe.model"
import { EventEmitter } from '@angular/core';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://rasamalaysia.com/wp-content/uploads/2020/02/honey-garlic-salmon1.jpg'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://rasamalaysia.com/wp-content/uploads/2020/02/honey-garlic-salmon1.jpg')
      ];

      getRecipes() {
          return this.recipes.slice()
      }
}