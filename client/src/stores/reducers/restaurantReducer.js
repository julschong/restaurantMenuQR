import { ADD_RESTAURANTS, GET_RESTAURANTS } from '../types';

const initialState = {
    restaurants: [],
    loading: true
};

const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload,
                loading: false
            };
        case ADD_RESTAURANTS:
            return {
                ...state,
                restaurants: [...state.restaurants, action.payload],
                loading: false
            };
        default:
            return state;
    }
};

export default restaurantReducer;
