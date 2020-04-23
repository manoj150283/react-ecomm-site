import { combineReducers } from 'redux';
import { RootState } from '../type';
import { authReducer } from './auth/auth.slice';
import { cartReducer } from './cart/cart.slice';
import { marketingReducer } from './marketing/marketing.slice';

export const rootReducer = combineReducers<RootState>({
  auth: authReducer,
  cart: cartReducer,
  marketing: marketingReducer,
});
