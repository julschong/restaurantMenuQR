import { ADD_MENU, GET_MENUS } from '../types';
import { RELOAD_MENU } from './../types';

const initialState = {
    menus: [],
    loading: true
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MENUS:
            return {
                ...state,
                menus: action.payload,
                loading: false
            };
        case ADD_MENU:
            return {
                ...state,
                menus: [...state.menus, action.payload],
                loading: false
            };
        case RELOAD_MENU:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};

export default menuReducer;
