import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadData, loadSuccess } from './products.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ApiService, IProduct } from 'src/app/services/api.service';
import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadData),
      exhaustMap(() =>
        this.apiService.getProducts().pipe(
          map((products: IProduct[]) => loadSuccess({ products })),
          catchError(() => EMPTY)
        )
      )
    );
  });
}
