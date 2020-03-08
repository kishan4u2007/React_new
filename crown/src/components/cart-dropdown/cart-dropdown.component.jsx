import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux'
import {createStructuredSelector } from "reselect"
import { withRouter } from 'react-router-dom'

import CartItem from "../cart-item/cart-item.component"
import { toggleCartHidden } from "../../Redux/cart/cart.actions"
import { selectCartItems } from "../../Redux/cart/cart-selectors"

import './cart-dropdown.styles.scss';



const CartDropdown = ({cartItems, history, dispatch}) => {


  return (
  <div className='cart-dropdown'>
    <div className='cart-items'>
    {
      cartItems.length ? (
        cartItems.map(item => (
          <CartItem key={item.id} items={item} />
          ))
       ) : (<span className="empty-message">Your cart is empty</span>)
    }

    </div>
    <CustomButton onClick={() => 
      {history.push("/checkout");
      dispatch(toggleCartHidden())
    }
      }>GO TO CHECKOUT</CustomButton>
  </div>
)};

// oginal way
// const mapStateToProps = state => ({
//   cartItems : state.cart.cartItems
// })

// newWay
// const mapStateToProps = ({ cart : { cartItems } }) => ({
//   cartItems
// })

const mapStateToProps = createStructuredSelector ({
  cartItems :  selectCartItems
})

// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: ()  => dispatch(toggleCartHidden)
// })

export default withRouter(connect(mapStateToProps, null)(CartDropdown));