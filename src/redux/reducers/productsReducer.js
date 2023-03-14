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
            return state;
        default:
            return state
    }
}