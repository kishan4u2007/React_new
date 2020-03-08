import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../Redux/cart/cart.actions';

import {createStructuredSelector} from "reselect"
import { selectCartItemsCount } from "../../Redux/cart/cart-selectors"

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);



// const mapStateToProps = (state) => ({
//   itemCount : selectCartItemsCount(state)
// })

const mapStateToProps = createStructuredSelector ({
  itemCount : selectCartItemsCount
})

// const mapStateToProps = state =>{ 
//     console.log("I am calling again")
//   return ({
//   itemCount : state.cart.cartItems.reduce((accumatedQty, cartIem) =>  accumatedQty +  cartIem.quantity , 0)
// })}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);