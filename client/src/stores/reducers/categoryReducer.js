import { GET_CATEGORY, ADD_CATEGORY, RELOAD_CATEGORY } from './../types';
const initialState = {
    categories: [],
    loading: true
};
const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY:
            return {
                ...state,
                categories: action.payload,
                loading: false
            };
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload],
                loading: false
            };
        case RELOAD_CATEGORY:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};

export default categoryReducer;
