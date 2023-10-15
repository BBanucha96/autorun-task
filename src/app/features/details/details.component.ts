import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, switchMap } from 'rxjs';
import { IProduct } from 'src/app/services/api.service';
import {
  getLoadedProducts,
  getProductById,
} from 'src/app/store/products/products.selectors';

@Component({
  selector: 'atr-details',
  templateUrl: 'details.component.html',
})
export class DetailsComponent implements OnInit {
  product$: Observable<IProduct | undefined>;
  isLoaded$: Observable<boolean>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.isLoaded$ = this.store.select(getLoadedProducts);
    this.product$ = this.isLoaded$.pipe(
      switchMap((loaded) => {
        if (loaded) {
          return this.store.select(getProductById(id));
        } else {
          return of(undefined);
        }
      })
    );
  }
}
