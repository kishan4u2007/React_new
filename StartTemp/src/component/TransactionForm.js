import React, {Component } from 'react'
import { connect } from 'react-redux'
import * as action from "../action/transactionAction"
import { bindActionCreators } from 'redux'

class TransactionForm extends Component {
    // state = {
    //     bAccountNo : '',
    //     iFSC: '',
    //     bName : '',
    //     amount: ''
    // }

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if(this.props.currentIndex === -1) {
            return {
                bAccountNo : '',
                iFSC: '',
                bName : '',
                amount: ''
            }
        }else {
            return this.props.list[this.props.currentIndex]
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length ) {
            this.setState({
                ...this.returnStateObject()
            })
        }

        console.log(prevProps, this.props)
      
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
       
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //this.props.onAddOrEdit(this.state)
        if(this.props.currentIndex === -1) {
            this.props.insertTransition(this.state)
        }else {
            this.props.updateTransition(this.state)
        }
            
    }

    render() { 
        return ( 
      
            <form autoComplete="off" onSubmit={this.handleSubmit}>
                <input name="bAccountNo" placeholder="A/C No." value={this.state.bAccountNo} onChange={this.handleInputChange}  /> <br />
                <input name="iFSC" placeholder="IFSC" value={this.state.iFSC} onChange={this.handleInputChange}  /><br />
                <input name="bName" placeholder="bName" value={this.state.bName} onChange={this.handleInputChange}  /><br />
                <input name="amount" placeholder="amount" value={this.state.amount} onChange={this.handleInputChange}  /><br />
                <button type="submit">Submit</button>
            </form>
         );
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         deleteTransaction: (index) => dispatch(action.Delete(index))
//     }
// }

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        insertTransition: action.insert,
        updateTransition: action.update
    }, dispatch)
}

 
export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
