import { combineReducers} from "redux";

import products from './products';
import authReducer from './auth';

export default combineReducers({products, authReducer})