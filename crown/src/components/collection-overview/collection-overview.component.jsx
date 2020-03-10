import React from 'react';
import  { connect } from 'react-redux';

import {  createStructuredSelector } from "reselect";
import { selectShopSections } from '../../Redux/shop/shop.selector';
import PreviewCollection from "../preview-collection/preview.collection.component"

import './collection-overview.styles.scss'


const CollectionOverview = ({collections}) => (
    <div className='collection-overview'>
         {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <PreviewCollection key={id} {...otherCollectionProps} />
                    ))
                }
    </div>
)

const mapStateToProps = createStructuredSelector ({
    collections:  selectShopSections 
  })

export default connect(mapStateToProps)(CollectionOverview)