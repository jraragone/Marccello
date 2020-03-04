import {SET_PRODUCTS} from '../constants'

const initialState = {
    products: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return Object.assign({}, state, {products: action.products})
        default:
            return state;
    }
}