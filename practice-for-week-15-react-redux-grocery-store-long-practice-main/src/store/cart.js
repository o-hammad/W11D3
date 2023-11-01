const ADD_CART_ITEM = "cart/ADD_CART_ITEM";
const REMOVE_CART_ITEM = "cart/REMOVE_CART_ITEM";
const INCREMENT_QUANTITY = "cart/INCREMENT_QUANTITY";
const CLEAR_CART = "cart/CLEAR_CART";

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

export const incrementQuantity = (produceId) => {
    return {
      type: INCREMENT_QUANTITY,
      produceId,
    };
}

export const clearCart = () => {
    return {
      type: CLEAR_CART
    };
}

export default function cartReducer(state = {}, action) {
    const oldObj = Object.assign({}, Object.freeze(state));
    
    switch (action.type) {
      case ADD_CART_ITEM:
        const newObj = {
          ...oldObj,
          [action.produceId]: { id: action.produceId, count: 1 },
        };
        return newObj;
      case REMOVE_CART_ITEM:
        delete oldObj[action.produceId];
        return oldObj;
      case INCREMENT_QUANTITY:
        oldObj[action.produceId].count++;
        return oldObj;
      case CLEAR_CART:
        return {};
      default:
        return state;
    }
}
