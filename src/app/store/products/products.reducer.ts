import { createReducer, on } from '@ngrx/store';
import { IProduct } from 'src/app/services/api.service';
import { loadData, loadSuccess, sortProducts } from './products.actions';
import { IProductState } from './products.state';

const initialState: IProductState = {
  loaded: false,
  error: null,
  product: [],
};

export const productsReducer = createReducer(
  initialState,
  on(loadData, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(loadSuccess, (state, { products }) => ({
    ...state,
    product: products,
    loaded: true,
    error: null,
  })),
  on(sortProducts, (state, { column, isAscending }) => {
    const sortFn = () => (a: IProduct, b: IProduct) => {
      const aValue = a[column];
      const bValue = b[column];
      if (aValue < bValue) return isAscending ? -1 : 1;
      if (aValue > bValue) return isAscending ? 1 : -1;
      return 0;
    };
    const sortedProducts = [...state.product].sort(sortFn());
    return {
      ...state,
      product: sortedProducts,
      loaded: true,
      error: null,
    };
  })
);
