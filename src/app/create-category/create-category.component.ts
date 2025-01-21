import { Component } from '@angular/core';
import {Category} from "../model/Category";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent {

  isModalVisible = false;
  categoryList: Category[] = [];

  showModal() {
    console.log(this.isModalVisible);
    this.isModalVisible = true;
    console.log(this.isModalVisible);
  }

  hideModal() {
    console.log(this.isModalVisible);
    this.isModalVisible = false;
    console.log(this.isModalVisible);
  }



}
