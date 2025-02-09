import {Component, Input, OnInit} from '@angular/core';
import { Category } from '../model/CategoryInterface';
import { CATEGORY_DUMMY } from "../model/CategoryDummy";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent implements OnInit{

  isModalVisible = false;
  isEditModalVisible = false;
  categoryList: Category [] = [];

  showNewModal() {
    console.log(this.isModalVisible);
    this.isModalVisible = true;
    console.log(this.isModalVisible);
  }

  hideNewModal() {
    console.log(this.isModalVisible);
    this.isModalVisible = false;
    console.log(this.isModalVisible);
  }

  showEditModal() {
    console.log(this.isEditModalVisible);
    this.isEditModalVisible = true;
    console.log(this.isEditModalVisible);
  }

  hideEditModal() {
    console.log(this.isEditModalVisible);
    this.isEditModalVisible = false;
    console.log(this.isEditModalVisible);
  }

  ngOnInit(): void {
    this.categoryList = CATEGORY_DUMMY;
  }





}
