import React from 'react';

import { connect } from "react-redux"

import { addItems } from "../../Redux/cart/cart.actions"

import CustomeButton from "../custom-button/custom-button.component";

import './collection-item.styles.scss';


const CollectionItem = ({item, addItems }) => {
    const {  name, price, imageUrl } = item
    return(
    <div className='collection-item'>
        <div 
        className='image'
        style={{
            backgroundImage:`url(${imageUrl})`
        }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomeButton inverted onClick={() => addItems(item)}>Add to cart</CustomeButton>
   
    </div>
)}

const mapDispatchToProps = dispatch => ({
    // addItems: () => dispatch(addItems())
    addItems: item => dispatch(addItems(item))
  });

export default connect(null, mapDispatchToProps )(CollectionItem);


