import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-edit-category-modal',
  templateUrl: './edit-category-modal.component.html',
  styleUrl: './edit-category-modal.component.css'
})
export class EditCategoryModalComponent {

  @Output() close = new EventEmitter<void>();

  closeEditCategoryModal(): void {
    this.close.emit();
  }

  saveChanges(): void {

  }
}
