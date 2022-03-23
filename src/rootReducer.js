import {  ADD_CATEGORY, ADD_COUNTRY, REMOVE_CATEGORY, REMOVE_COUNTRY} from './actionCreators';

const initialState = {
    country: "",
    category: ""
}

export function categoryReducer( state = initialState, action) {

    switch(action.type) {
        case ADD_CATEGORY:
            var newState = {...state};
            return {
                ...newState,
                category: action.category
            };
        case REMOVE_CATEGORY:
            var newState = {...state};
            return {
                ...newState,
                category: ''
            };
        default: 
            return state;
    }
}

export function countryReducer( state = initialState, action) {

    switch(action.type) {
        case ADD_COUNTRY:
            var newState = {...state};
            return {
                ...newState,
                country: action.country
            }
            case REMOVE_COUNTRY:
                var newState = {...state};
                return {
                    ...newState,
                    country: undefined
                };
        default: 
            return state;
    }
}