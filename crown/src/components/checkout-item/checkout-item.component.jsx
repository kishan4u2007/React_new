import React from "react"

import { connect } from "react-redux"

import  {clearItemFromCart, removeItem, addItems} from "../../Redux/cart/cart.actions"

import "../../components/checkout-item/checkout-item.styles.scss"

const CheckoutItem = ({ cartItem,  ClearItemFromCart, removeItem, addItems }) => {
    const { name, imageUrl, quantity, price  } = cartItem
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl}/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={ () => removeItem(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={ () => addItems(cartItem)}>&#10095;</div>
            </span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={() => ClearItemFromCart(cartItem)}>&#10005;</span>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    ClearItemFromCart: item =>  dispatch(clearItemFromCart(item)),
    removeItem : item =>  dispatch(removeItem(item)),
    addItems : item =>  dispatch(addItems(item))

})

export default connect(null, mapDispatchToProps )(CheckoutItem)