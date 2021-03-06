import { ADD_RESTAURANTS, GET_RESTAURANTS, RESTAURANT_ERROR } from '../types';
import axios from 'axios';

export const getRestaurants = () => async (dispatch) => {
    try {
        const res = await axios.get(`http://localhost:3003/restaurants`);
        dispatch({
            type: GET_RESTAURANTS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: RESTAURANT_ERROR,
            payload: console.log(e)
        });
    }
};

export const addRestaurants = (restaurant) => async (dispatch) => {
    try {
        // const res = await axios.get(`http://localhost:3003/restaurants`);
        dispatch({
            type: ADD_RESTAURANTS,
            payload: restaurant
        });
    } catch (e) {
        dispatch({
            type: RESTAURANT_ERROR,
            payload: console.log(e)
        });
    }
};
