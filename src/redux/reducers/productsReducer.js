import { ActionTypes } from "../constants/Actions-Types";

const initState = {
    products: [
        {
            id: 1,
            title: "Samsoung phone",
            category: "mobile"
        }
    ]
}

export const productReducer = (state = initState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state
    }
}

export const selectedProductReducer = (state={}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        default:
            return state
    }
}