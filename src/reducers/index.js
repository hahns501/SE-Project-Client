import { combineReducers } from "redux";

import products from './products';
import authReducer from './auth';
import user from './user';

export default combineReducers({products, authReducer, user})