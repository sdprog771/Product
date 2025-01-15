import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-new-category-modal',
  templateUrl: './new-category-modal.component.html',
  styleUrl: './new-category-modal.component.css'
})
export class NewCategoryModalComponent {

  @Output() close = new EventEmitter<void>();

  closeNewCategoryModal(): void {
    this.close.emit();
  }

  saveNewCategory(): void {

  }
}
