import { Component } from '@angular/core';
import {Product} from "../model/Product";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  searchTokens: string[] = [];
  searchResultList: Product[] = [];
  hasTokens = false;

  //to get filtered results
  getSearchTokens(searchInput: string){
    return this.searchTokens = searchInput.split(" ");
  }

  show(){
    this.hasTokens = true;
  }
}
