import { Component } from '@angular/core';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent {

  isModalVisible = false;

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
