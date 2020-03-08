//input selector

import { createSelector } from "reselect"

const selectCart = state => state.cart;

//input selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

//Memoized Selectors
export const selectCartItemsCount =  createSelector (
    [selectCartItems],
    cartItems => cartItems.reduce((accumatedQty, cartIem) =>  accumatedQty +  cartIem.quantity , 0)
)

export const selectCartTotal =  createSelector (
    [selectCartItems],
    cartItems => cartItems.reduce((accumatedQty, cartIem) =>  accumatedQty +  cartIem.quantity * cartIem.price , 0)
)

