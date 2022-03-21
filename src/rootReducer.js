import {  ADD_CATEGORY, ADD_COUNTRY, REMOVE_CATEGORY, REMOVE_COUNTRY} from './actionCreators';

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
        case ADD_COUNTRY:
            return {
                ...newState,
                country: action.country
            }
            case REMOVE_COUNTRY:
                return {
                    ...newState,
                    country: undefined
                };
        default: 
            return state;
    }
}