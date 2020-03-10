import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import  { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../Redux/directory/directory.selector'
import { connect } from 'react-redux'

class Directory extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className='directory-menu'>
                
                {
                   /*  this.state.sections.map(({id, title, imageUrl, size, linkUrl}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={this.props.history}  />
                    )) */

                    this.props.sections.map(({id, ...otherSectionProps}) => (
                      <MenuItem key={id} {...otherSectionProps}  />
                    ))
                }
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//   directory: state.directory.sections
// })

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})

export default connect(mapStateToProps, null)(Directory);