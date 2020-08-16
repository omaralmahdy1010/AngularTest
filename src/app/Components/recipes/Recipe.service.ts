import { Recipe } from "./Recipe.model"
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service'
 
@Injectable()

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
         'This is simply a test',
          'https://rasamalaysia.com/wp-content/uploads/2020/02/honey-garlic-salmon1.jpg',
          [
              new Ingredient('Meat', 1),
              new Ingredient('French Fries', 20)
          ]),
        new Recipe('Another Test Recipe',
         'This is simply a test', 
         'https://rasamalaysia.com/wp-content/uploads/2020/02/honey-garlic-salmon1.jpg',
         [
             new Ingredient('Koshary',5),
             new Ingredient('Salsa',10)
         ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice()
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}