const ADD_CART_ITEM = "cart/ADD_CART_ITEM";
const REMOVE_CART_ITEM = "cart/REMOVE_CART_ITEM";

export const addCartItem = (produceId) => {
    return {
        type: ADD_CART_ITEM,
        produceId
    }
};

export const removeCartItem = (produceId) => {
    return {
        type: REMOVE_CART_ITEM,
        produceId
    }
}

export default function cartReducer(state = {}, action) {
    const oldObj = Object.assign({}, Object.freeze(state));
    
    switch (action.type) {
        case ADD_CART_ITEM:
            const newObj = {
                ...oldObj,
                [action.produceId]: {id: action.produceId, count: 1}
            };
            return newObj;
        case REMOVE_CART_ITEM:
            delete oldObj[action.produceId];
            return oldObj
        default:
            return state;
    }
}
