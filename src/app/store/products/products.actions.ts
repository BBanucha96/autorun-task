import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/services/api.service';

export const loadData = createAction('[Products] Load Data');

export const loadSuccess = createAction(
  '[Products] Load Success',
  props<{ products: IProduct[] }>()
);

export const sortProducts = createAction(
  '[Products] Sort Products',
  props<{ column: string; isAscending: boolean }>()
);
