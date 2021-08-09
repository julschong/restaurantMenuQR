import {
    ADD_CATEGORY,
    RESTAURANT_ERROR,
    GET_CATEGORY,
    RELOAD_CATEGORY
} from '../types';
import axios from 'axios';

export const getCategories = (restaurantId) => async (dispatch) => {
    try {
        const res = await axios.get(
            `http://localhost:3003/category?restaurantId=${restaurantId}`
        );
        dispatch({
            type: GET_CATEGORY,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: RESTAURANT_ERROR,
            payload: console.log(e)
        });
    }
};

export const addCategory = (category) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_CATEGORY,
            payload: category
        });
    } catch (e) {
        dispatch({
            type: RESTAURANT_ERROR,
            payload: console.log(e)
        });
    }
};

export const reloadCategory = () => async (dispatch) => {
    try {
        dispatch({
            type: RELOAD_CATEGORY
        });
    } catch (e) {
        dispatch({
            type: RESTAURANT_ERROR,
            payload: console.log(e)
        });
    }
};
