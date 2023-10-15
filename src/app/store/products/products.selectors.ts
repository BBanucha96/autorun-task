import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProductState, PRODUCTS_FEATURE_KEY } from './products.state';

export const getProductsState =
  createFeatureSelector<IProductState>(PRODUCTS_FEATURE_KEY);

export const getLoadedProducts = createSelector(
  getProductsState,
  (state: IProductState) => state.loaded
);

export const getProductsError = createSelector(
  getProductsState,
  (state: IProductState) => state.error
);

export const getAllProducts = createSelector(
  getProductsState,
  (state: IProductState) => state.product
);

export const getProductById = (productId: number) =>
  createSelector(getProductsState, (state: IProductState) =>
    state.product.find((product) => product.id === productId)
  );

export const selectSortedProducts = createSelector(
  getProductsState,
  (state: IProductState) => state.product
);
