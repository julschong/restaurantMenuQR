import { ADD_MENU, RESTAURANT_ERROR } from '../types';
import axios from 'axios';
import { GET_MENUS, RELOAD_MENU } from './../types';

export const getMenus = (restaurantId) => async (dispatch) => {
    try {
        const res = await axios.get(
            `http://localhost:3003/menu?restaurantId=${restaurantId}`
        );
        dispatch({
            type: GET_MENUS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: RESTAURANT_ERROR,
            payload: console.log(e)
        });
    }
};

export const addMenu = (menu) => async (dispatch) => {
    try {
        // const res = await axios.get(`http://localhost:3003/restaurants`);
        dispatch({
            type: ADD_MENU,
            payload: menu
        });
    } catch (e) {
        dispatch({
            type: RESTAURANT_ERROR,
            payload: console.log(e)
        });
    }
};

export const reloadMenu = () => async (dispatch) => {
    try {
        // const res = await axios.get(`http://localhost:3003/restaurants`);
        dispatch({
            type: RELOAD_MENU
        });
    } catch (e) {
        dispatch({
            type: RESTAURANT_ERROR,
            payload: console.log(e)
        });
    }
};
