import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/services/api.service';
import { sortProducts } from 'src/app/store/products/products.actions';
import {
  getAllProducts,
  getProductById,
} from 'src/app/store/products/products.selectors';
import { TableModalService } from './modal/table-modal.service';

@Component({
  selector: 'atr-table',
  templateUrl: 'table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  /** Observable of all products */
  products$: Observable<IProduct[]> = this.store.select(getAllProducts);

  /** column on which sort is based */
  sortedColumn: string | undefined;

  /** sorting direction */
  isAscending: boolean = false;

  /** opens modal */
  isModalOpen: boolean = false;

  /** id of product to edit */
  productToEdit: Observable<IProduct | undefined>;

  /** order of columns */
  keyOrder = ['id', 'image', 'title', 'price', 'category'];

  constructor(
    private store: Store<{ products: IProduct[] }>,
    private readonly tableModalService: TableModalService
  ) {}

  /**
   * Sorts products
   * @param column value that should be used as a sort variable
   */
  sortProducts(column: string): void {
    if (column !== 'image') {
      if (this.sortedColumn === column) {
        this.isAscending = !this.isAscending;
      } else {
        this.sortedColumn = column;
        this.isAscending = true;
      }
      this.store.dispatch(
        sortProducts({ column, isAscending: this.isAscending })
      );
    }
  }

  /**
   * Opens modal for selected product
   * @param id of product
   */
  openProductModal(id: number): void {
    this.tableModalService.openModal();
    this.productToEdit = this.store.select(getProductById(id));
  }
}
