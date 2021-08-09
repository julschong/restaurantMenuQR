import { combineReducers } from 'redux';
import restaurantReducer from './restaurantReducer';
import categoryReducer from './categoryReducer';
import menuReducer from './menuReducer';

export default combineReducers({
    restaurants: restaurantReducer,
    categories: categoryReducer,
    menus: menuReducer
});
