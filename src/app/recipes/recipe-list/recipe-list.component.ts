import { Recipe } from './../recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('a test recipe', 'this is just test', 'https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_1280.jpg'),
    new Recipe('a test recipe', 'this is just test', 'https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_1280.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
