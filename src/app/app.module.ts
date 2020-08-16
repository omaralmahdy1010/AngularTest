import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'core-js';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component'
import { dropdownDirective } from './shared/dropdown.directive'
import {FormsModule } from '@angular/forms'
import { ShoppingListService } from './components/shopping-list/shopping-list.service'

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    ShoppingEditComponent,
    HeaderComponent,
    dropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
