import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/services/api.service';
import { getAllProducts } from 'src/app/store/products/products.selectors';

@Component({
  selector: 'atr-grid',
  templateUrl: 'grid.component.html',
})
export class GridComponent {
  products$: Observable<IProduct[]> = this.store.select(getAllProducts);

  constructor(
    private readonly store: Store<{ products: IProduct[] }>,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  /**
   * Redirects to details page for desired product
   */
  goToDetails(id: number): void {
    this.router.navigate(['details', id], { relativeTo: this.route });
  }
}
