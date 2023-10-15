import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/services/api.service';
import { TableModalService } from './table-modal.service';

@Component({
  selector: 'atr-table-modal',
  templateUrl: 'table-modal.component.html',
})
export class TableModalComponent {
  /** product to edit */
  @Input() product$: Observable<IProduct | undefined>;

  isOpen: Observable<boolean>;

  constructor(private readonly tableModalService: TableModalService) {}

  ngOnInit(): void {
    this.isOpen = this.tableModalService.isOpen();
  }

  /**
   * Closes the modal
   */
  closeModal(): void {
    this.tableModalService.closeModal();
  }

  /**
   * Saves the product
   */
  onSave(): void {}
}
