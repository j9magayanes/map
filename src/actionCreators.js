export const ADD_CATEGORY = "ADD_CATEGORY"
export const REMOVE_CATEGORY = "REMOVE_CATEGORY"
export const ADD_COUNTRY = "ADD_COUNTRY"
export const REMOVE_COUNTRY = "REMOVE_COUNTRY"

export function addCategory(category) {
    return {
        type: ADD_CATEGORY,
        category
    };
}

export function removeCategory(category) {
    return {
        type: REMOVE_CATEGORY,
        category
    };
}

export function addCountry(country) {
    return {
        type: ADD_COUNTRY,
        country
    };
}

export function removeCountry(country) {
    return {
        type: REMOVE_COUNTRY,
        country
    };
}