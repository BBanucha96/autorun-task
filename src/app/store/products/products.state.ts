import { IProduct } from 'src/app/services/api.service';

export const PRODUCTS_FEATURE_KEY = 'products';
export interface IProductState {
  product: IProduct[];
  loaded: boolean;
  error?: string | null;
}

export const initialProductState: IProductState = {
  product: [],
  loaded: false,
  error: null,
};
