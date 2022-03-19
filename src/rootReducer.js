import {  ADD_CATEGORY, REMOVE_CATEGORY } from './actionCreators';

const initialState = {
    category: "all"
}

export default function rootReducer( state = initialState, action) {

    switch(action.type) {
        case ADD_CATEGORY:
            var newState = {...state};
            return {
                category: action.category
            };
        case REMOVE_CATEGORY:
            return {
                ...newState,
                category: ''
            };
        default: 
            return state;
    }
}